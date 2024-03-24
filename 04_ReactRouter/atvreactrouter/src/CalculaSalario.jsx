const CalculaSalario = () => {
    const salBruto = Number(localStorage.getItem("horas")) * Number(localStorage.getItem("valor_hora"));
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
    const salLiquido = salBruto - inss;
    return (
        <>
            <div className="container">
                            <h3>Nome: <b>{localStorage.getItem("usuario")}</b></h3>
                            <h3>Telefone: <b>{localStorage.getItem("telefone")}</b></h3>
                            <h3>Horas Trabalhadas: <b>{localStorage.getItem("horas")}</b></h3>
                            <h3>Salário Bruto: <b>R$ {salBruto},00</b></h3>
                            <h3>Valor pago INSS: <b>R$ {Number(inss)},00</b></h3>
                            <h3>Salário Líquido: <b>R$ {salLiquido},00</b></h3>
            </div>
        </>
    )
}

export default CalculaSalario;