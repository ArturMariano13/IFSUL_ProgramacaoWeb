import { useState } from "react"

function Calculo() { 
    const [valor1, setValor1] = useState(null);
    const [valor2, setValor2] = useState(null);
    const [resultado, setResultado] = useState(null);
    
    return (
        <>
            <div>
                <label>Valor 1</label>
                <input type="number" value={valor1}
                onChange={ e => setValor1(e.target.value)} />
            </div>
            <div>
                <label>Valor 2</label>
                <input type="number" value={valor2}
                onChange={ e => setValor2(e.target.value)} />
            </div>
            <button onClick={() => 
                setResultado(Number(valor1) + Number(valor2))}>+</button>
            <button onClick={() => 
                setResultado(Number(valor1) - Number(valor2))}>-</button>
            <button onClick={() => 
                setResultado(Number(valor1) * Number(valor2))}>x</button>
            <button onClick={() => 
                setResultado(Number(valor1) / Number(valor2))}>/</button>
            <button onClick={() => 
                setResultado(Number(valor1) ** Number(valor2))}>^</button>
                
            <h1>Resultado: {resultado}</h1>
            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>
        </>
    )
}

export default Calculo;