import React from 'react'
import Logo from '../../public/logoMarcaDeitada.png'
import './styles.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="h-container">
                    <img src={Logo} alt="LogoMarca" />
                </div>
            </header>
        </>

    );
}

export default Header
