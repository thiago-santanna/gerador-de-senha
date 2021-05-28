import React from 'react';
import './styles.css'

const Password = ({password}) => {
    const charClassType = (char) => {
        if (char.match(/[a-zA-Z]/)) return 'letra'
        if (char.match(/[0-9]/)) return 'numero'
        return 'simbolo'  
    }

    return (
        <div className="passwordBox">
            <p>
                {Array.from(password).map( (char, index) => (
                    <span key={index} className={charClassType(char)}>
                        {char}
                    </span>                    
                ) )}
            </p>
        </div>
    );
}

export default Password;
