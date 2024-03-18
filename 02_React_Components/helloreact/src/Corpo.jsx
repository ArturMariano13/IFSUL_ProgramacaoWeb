const Corpo = (props) => {
    return (
        <>
            <h2>{props.titulo}</h2>
            <button onClick={ () => 
            props.mensagemAlerta('Usei a função mensagem alerta')}>
                Mensagem
            </button>
            {
                props.dados.map( (linha, index) => (
                    <li key={index}>{linha}</li>
                ))
            }
            <h2>Contador com props: {props.contador}</h2>
        </>
    )
}

export default Corpo;