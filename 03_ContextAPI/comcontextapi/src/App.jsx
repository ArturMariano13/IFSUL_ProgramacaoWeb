import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import Exibe from "./Exibe";
import Calculo from "./Calculo";

function App() {

  const [media, setMedia] = useState(-1);
  const [color, setColor] = useState('white');
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);

  const calculaMedia = () => {
    setMedia((Number(nota1) + Number(nota2)) / 2);
  }

  useEffect(() => {
    setColor(media >= 6 ? 'green' : 'red');
  }, [media]);

  return (
    <AppContext.Provider value={{
      media, color, nota1, setNota1, nota2, setNota2, calculaMedia
    }}>
      <Exibe/>
      <Calculo/>
    </AppContext.Provider>
  );
}

export default App;
