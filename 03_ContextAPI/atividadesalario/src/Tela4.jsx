import './App.css';
import { useContext } from 'react';
import AppContext from "./AppContext";

function Tela4() {
    const { tela4, setTela4, horas, nome, telefone, salBruto, salLiquido, inss } = useContext(AppContext);

    return (
        <>
            {tela4 &&
                <>
                    <div className="dados">
                            <p>Nome: <b>{nome}</b></p>
                            <p>Telefone: <b>{telefone}</b></p>
                            <p>Horas Trabalhadas: <b>{horas}</b></p>
                            <p>Salário Bruto: <b>R$ {salBruto},00</b></p>
                            <p>Valor pago INSS: <b>R$ {Number(inss)},00</b></p>
                            <p>Salário Líquido: <b>R$ {salLiquido},00</b></p>
                        <button onClick={() => setTela4(!tela4)}>
                            Reiniciar</button>
                    </div>
                </>
            }
        </>
    )
}

export default Tela4;