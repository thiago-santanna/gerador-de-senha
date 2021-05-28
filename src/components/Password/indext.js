import React from 'react';
import './styles.css'

const Password = ({password}) => {
    return (
        <div className="passwordBox">
            <p>{password}</p>
        </div>
    );
}

export default Password;
