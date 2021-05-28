import React, {useState, useEffect} from 'react'
import Password from '../Password/indext'
import './styles.css'

const Content = () => {
    const [digitos, setDigitos] = useState(8)
    const [qtdNumero, setQtdNumero] = useState(2)
    const [qtdSimbolo, setQtdSimbolo] = useState(2)
    const [password, setPassword] = useState('teste@1020#Tskl5')

    useEffect(() => {
        const psw =[]

        let tamanhoDaSenha = digitos - qtdNumero - qtdSimbolo
        if (tamanhoDaSenha === 0) tamanhoDaSenha = 0

        psw.push(...Array.from({length: qtdNumero}, randomNumero))
        psw.push(...Array.from({length: qtdSimbolo}, randomSimbolos))
        psw.push(...Array.from({length: digitos}, randomDigitos)) 

        setPassword(
            psw
                .slice(0, digitos)
                .sort( () => Math.random() - 0.5 )
                .join('')
        )
    }, [digitos, qtdNumero, qtdSimbolo]);

    const randomNumero = () => {
        const listNumero = '0123456789'
        return listNumero[Math.floor(Math.random() * listNumero.length)]
    }

    const randomSimbolos = () => {
        const listSimbolos = '#$&(+,.?@[]^{}'
        return listSimbolos[Math.floor(Math.random() * listSimbolos.length)]
    }

    const randomDigitos = () => {
        const listDigitos = 'abcdefzhijlmnopqrstuvyxwz'
        const digito = listDigitos[Math.floor(Math.random() * listDigitos.length)]
        return Math.random() >= 0.5 ? digito : digito.toUpperCase()
    }

    return (
        <>
            <main>
                <div className="container">
                    <h2>Geração</h2>
                    <div className="selectors">
                        <span>digitos por tipo de caracteres</span>

                        <div className="selectors-items">
                            <label htmlFor="letras">Tamanho</label>
                            <input
                              type="range"
                              name="letras"
                              min={8}
                              max={32}
                              value={digitos}
                              onChange={ ({target}) => {setDigitos(Number(target.value))}} />
                            <span>{digitos}</span>
                        </div>

                        <div className="selectors-items">
                            <label htmlFor="numeros">Números</label>
                            <input
                              type="range"
                              name="numeros"
                              min={0}
                              max={4}
                              value={qtdNumero}
                              onChange={ ({target}) =>{setQtdNumero(Number(target.value))} } />
                            <span>{qtdNumero}</span>
                        </div>

                        <div className="selectors-items">                            
                            <label htmlFor="simbolos">Símbolos</label>
                            <input
                              type="range"
                              name="simbolos"
                              min={0}
                              max={4}
                              value={qtdSimbolo}
                              onChange={ ({target}) => { setQtdSimbolo(Number(target.value)) }} />
                            <span>{qtdSimbolo}</span>
                        </div>

                    </div>

                    <button className="btn btn-gerador">Gerar Senha</button>
                    <button className="btn btn-copy">Copiar Senhas</button>

                    <Password password={password} />
                </div>
            </main>        
        </>
    )
}

export default Content
