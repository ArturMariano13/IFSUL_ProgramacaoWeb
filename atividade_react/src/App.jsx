import './App.css';
import { useState } from 'react';

function App() {

  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [classificacoes, setClassificacoes] = useState(null, null, null, null, null);


  return (
    <div className="App">
      <header>
        <h1>Formulário para Cálculo de IMC</h1>
      </header>
      <body>
        <div>
          <label>Altura (em cm) </label>
          <input type="number" value={altura}
            onChange={e => setAltura(e.target.value)} />
          <br/>
          <label>Peso (em kg) </label>
          <input type="number" value={peso}
            onChange={e => setPeso(e.target.value)} />
          <br/>
          <button onClick={() => 
            setImc(Number(peso)/((Number(altura)/100)**2))}>Calcular</button>
          <h2>IMC: {imc.toPrecision(4)}</h2>
          {

          }
          
          <h2>Classificação: {}</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
