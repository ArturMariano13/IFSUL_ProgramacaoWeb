import './App.css';
import { useContext } from 'react';
import AppContext from "./AppContext";

function Tela3() {
    const { tela3, setTela3, valorHora, setValorHora, horas, setHoras } = useContext(AppContext);

    return (
        <>

            {tela3 &&
                <>
                    <div className="dados">
                        <div>
                            <label>Valor hora</label>
                            <input type="text" value={valorHora}
                                onChange={e => setValorHora(e.target.value)} />
                        </div>
                        <div>
                            <label>Horas trabalhadas</label>
                            <input type="text" value={horas}
                                onChange={e => setHoras(e.target.value)} />
                        </div>
                        <button onClick={() => setTela3(!tela3)}>
                            Concluir</button>
                    </div>
                </>
            }
        </>
    )
}

export default Tela3;