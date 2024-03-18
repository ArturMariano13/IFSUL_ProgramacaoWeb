import './App.css';
import { useContext } from 'react';
import AppContext from "./AppContext";

function Tela2() {
    const { tela2, setTela2, nome, setNome, telefone, setTelefone } = useContext(AppContext);

    return (
        <>

            {tela2 &&
                <>
                    <div className="dados">
                        <div>
                            <label>Nome</label>
                            <input type="text" value={nome}
                                onChange={e => setNome(e.target.value)} />
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="text" value={telefone}
                                onChange={e => setTelefone(e.target.value)} />
                        </div>
                        <button onClick={() => setTela2(!tela2)}>
                            Avançar</button>
                    </div>
                </>
            }
        </>
    )
}

export default Tela2;