import { useState } from "react";

const Imc = () => {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState(null);

    function definirClassificacao(imc) {
        if (imc < 18.5) {
            setClassificacao("Magreza");
        } else if (imc < 24.9) {
            setClassificacao("Normal");
        } else if (imc < 29.9) {
            setClassificacao("Sobrepeso");
        } else if (imc < 39.9) {
            setClassificacao("Obesidade");
        } else {
            setClassificacao("Obesidade Grave");
        }
    }

    function calcularIMC(e) {
        e.preventDefault();
        const novoImc = Number(peso) / ((Number(altura) / 100) ** 2);
        setImc(novoImc.toPrecision(4));
        definirClassificacao(novoImc);
    }
    return (
        <>
            <div class="container">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputNumber1" className="form-label">Altura (em cm) </label>
                        <input type="number" class="form-control" id="exampleInputNumber1" value = {altura}
                            onChange={e => setAltura(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputNumber2" className="form-label">Peso (em kg) </label>
                        <input type="number" class="form-control" id="exampleInputNumber2"
                            value = {peso} onChange={e => setPeso(e.target.value)} />
                    </div>
                    <div className="botao">
                        <button type="submit" class="btn btn-primary" onClick={(e) => {
                            calcularIMC(e);
                        }}>Calcular</button>
                    </div>
                </form>
                <div class="result">
                    <h3>IMC: {imc}</h3>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            </div>
        </>
    )
}
export default Imc;