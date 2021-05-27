import React from 'react'
import './styles.css'

const Content = () => {
    return (
        <>
            <main>
                <div className="container">
                    <h2>Geração</h2>
                    <div className="selectors">
                        <span>Quantidade por tipo de caracteres</span>

                        <div className="selectors-items">
                            <label htmlFor="letras">Letras</label>
                            <input type="range" name="letras" />
                            <span>32</span>
                        </div>

                        <div className="selectors-items">
                            <label htmlFor="numeros">Números</label>
                            <input type="range" name="numeros" />
                            <span>4</span>
                        </div>

                        <div className="selectors-items">                            
                            <label htmlFor="simbolos">Símbolos</label>
                            <input type="range" name="simbolos" />
                            <span>4</span>
                        </div>

                    </div>

                    <button className="btn btn-gerador">Gerar Senha</button>
                    <button className="btn btn-copy">Copiar Senhas</button>

                    <h1 className="password">as3d21q6w5e4wq9e8r7</h1>
                </div>
            </main>        
        </>
    )
}

export default Content
