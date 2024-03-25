import { useState } from "react";

const Ola = () => {
    const [mensagem, setMensagem] = useState("");

    const getOla = async () => {
        await fetch('http://localhost:3002/')
            .then(response => response.json())
            .then(json => setMensagem(json.mensagem))
            .catch(err => console.log(err));
    }

    const getOla2 = async () => {
        const response = await fetch('http://localhost:3002');
        const statusCode = response.status;
        const json = await response.json();
        setMensagem("Status Code: " + statusCode + " JSON: " + JSON.stringify(json));
    }

    return (
        <>
        <div>
            <div className="container">
                <h1>{mensagem}</h1>
            </div>
                <br />
            <div className="botao">
                    <button onClick={() => getOla()}>Chamar a API</button>
                    <button onClick={() => getOla2()}>Chamar a API com outro método</button>
            </div>
        </div>
        </>
    )
}

export default Ola;