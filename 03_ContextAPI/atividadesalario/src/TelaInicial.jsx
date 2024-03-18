import './App.css';
import { useContext } from 'react';
import AppContext from "./AppContext";

function TelaInicial(){
    const {tela1, setTela1} = useContext(AppContext);

    return (
        <>
            <div className="container">
                {tela1 &&
                <button onClick={() => setTela1(!tela1)}>
                    Iniciar</button>}
            </div>
        </>
    )
}

export default TelaInicial;