import React from 'react'
import Logo from '../../public/logoMarca.png'
import './styles.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="f-container">
                    <span>&copy;<a href="https://curriculo-dev.tsswebapps.com/">TSS Aplicativos Web</a> - Sonhar não custa caro.</span>

                    <div className="f-contact">
                        <p>Entre em contato.</p>
                        <p>Email: tss.webapps@gmail.com</p>
                        <p>Whatsapp: 81 9 9271-3545</p>
                    </div>

                    <img src={Logo} alt="Logo marca" />
                </div>                
            </footer>
        </>
    );
}

export default Footer;
