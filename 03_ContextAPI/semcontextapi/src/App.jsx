import { useState } from "react";
import Calculo from "./Calculo";

function App() {

  const [media, setMedia] = useState(-1);
  const [color, setColor] = useState("white");

  const defineMedia = (valor) => {
    setColor(valor >= 6 ? 'green' : 'red');
    setMedia(valor);
  }

  return (
    <div className="App">
      <Calculo defineMedia={defineMedia}/>
      {
        media >= 0 &&
        <h1 style={{backgroundColor : color}}>Média: {media}</h1>
      }
    </div>
  );
}

export default App;
