import './App.css';
import { useState } from 'react';

function App() {

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


  function calcularIMC() {
    const novoImc = Number(peso) / ((Number(altura) / 100) ** 2);
    setImc(novoImc.toPrecision(4));
    definirClassificacao(novoImc);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Formulário para Cálculo de IMC</h1>
      </header>
      <body>
        <div class="container">
          <label>Altura (em cm) </label>
          <input type="number" value={altura}
            onChange={e => setAltura(e.target.value)} />
          <br />
          <label>Peso (em kg) </label>
          <input type="number" value={peso}
            onChange={e => setPeso(e.target.value)} />
          <br />
          <button onClick={calcularIMC}>Calcular</button>
        </div>
        <div class="result">
          <h3>IMC: {imc}</h3>
          <h3>Classificação: {classificacao}</h3>
        </div>
      </body>
    </div>
  );
}

export default App;
