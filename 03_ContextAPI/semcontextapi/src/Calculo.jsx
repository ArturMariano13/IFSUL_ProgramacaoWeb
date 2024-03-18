import { useState } from "react"

function Calculo({defineMedia}){
    
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);

    return (
        <>
            <div>
                <label>Nota 1: </label>
                <input type="number" value={nota1}
                    onChange={e => setNota1(e.target.value)}/>
            </div>
            <div>
                <label>Nota 2: </label>
                    <input type="number" value={nota2}
                        onChange={e => setNota2(e.target.value)}/>
            </div>
            <button onClick={() => 
            defineMedia((Number(nota1) + Number(nota2)) / 2)}>
                Calcular
            </button>
        </>
    )
}
export default Calculo;
