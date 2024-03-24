import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Salario = () => {
    const [telefone, setTelefone] = useState("");
    const [valorHora, setValorHora] = useState("");
    const [horas, setHoras] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputText1" className="form-label">Nome</label>
                        <input type="text" value={localStorage.getItem("usuario")} disabled={true} class="form-control" id="exampleInputText1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText2" className="form-label">Telefone </label>
                        <input type="text" class="form-control" id="exampleInputText2" onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText3" className="form-label">Valor hora</label>
                        <input type="text" class="form-control" id="exampleInputText3" onChange={e => setValorHora(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText4" className="form-label">Horas trabalhadas</label>
                        <input type="text" class="form-control" id="exampleInputText4"
                            onChange={e => setHoras(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => {
                                    localStorage.setItem("telefone", telefone);
                                    localStorage.setItem("valor_hora", valorHora);
                                    localStorage.setItem("horas", horas);
                                    navigate('/privado/salario-calculado');
                                }}>Calcular</button>
                </form>
            </div>
        </>
    )
}

export default Salario;