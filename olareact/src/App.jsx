import { useState } from "react";
import Titulo from "./Titulo";
import Corpo from "./Corpo";
import Calculo from "./Calculo";

function App() {

  const mensagemAlerta = (mensagem) => {
    alert(mensagem);
  }

  const [contador, setContador] = useState(0);



  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={ () => setContador(contador+1)}>+</button>
      <button onClick={ () => setContador(contador-1)}>-</button>
        <h1>Olá React!</h1>
        <Titulo texto="Primeira chamada Titulo"/>
        <Titulo texto="Primeira aula de React"/>
        <Corpo titulo="Usando o componente corpo"
          mensagemAlerta={mensagemAlerta}
          dados={['JSX', 'React', 'Node', 'CSS']}
          contador={contador}/>
        <h3>Contador: {contador}</h3>
        <Calculo/>
    </div>
  );
}

export default App;
