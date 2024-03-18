import { useEffect, useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import TelaInicial from './TelaInicial';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';

function App() {

  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [horas, setHoras] = useState(null);
  const [valorHora, setValorHora] = useState(null);
  const [salBruto, setSalBruto] = useState(null);
  const [salLiquido, setSalLiquido] = useState(null);
  const [inss, setInss] = useState(null);
  const [tela1, setTela1] = useState(true);
  const [tela2, setTela2] = useState(null);
  const [tela3, setTela3] = useState(null);
  const [tela4, setTela4] = useState(null);

  useEffect(() => {
    if (tela1 === false)
      setTela2(!tela2);
  }, [tela1])

  useEffect(() => {
    if (tela2 === false)
      setTela3(!tela2);
  }, [tela2])

  useEffect(() => {
    if (tela3 === false)
      setTela4(!tela4);
  }, [tela3])

  useEffect(() => {
    if (tela4 === false)
      setTela1(!tela1);
  }, [tela4])

  useEffect(() => {
    setSalBruto(horas * valorHora);
  }, [horas, valorHora])

  useEffect(() => {
    let inss;
    if (salBruto <= 1302){
      inss = salBruto * 0.075;
    }else if (salBruto <= 2571.29){
      inss = salBruto * 0.09;
    }else if (salBruto <= 3856.94){
      inss = salBruto * 0.12;
    }else{
      inss = salBruto * 0.14;
    }
    inss = parseFloat(inss.toFixed(2));
    setInss(inss);
    setSalLiquido(salBruto - inss);
  }, [salBruto])
  
  return (
    <AppContext.Provider value ={{nome, setNome, telefone, setTelefone, horas, 
      setHoras, valorHora, setValorHora, salBruto, salLiquido, tela1, setTela1,
      tela2, setTela2, tela3, setTela3, tela4, setTela4, inss, setInss
      }}>
      <TelaInicial/>
      <Tela2/>
      <Tela3/>
      <Tela4/>
    </AppContext.Provider>
  );
}

export default App;