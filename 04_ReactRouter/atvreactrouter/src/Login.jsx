import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("usuario");

    return (
        <>
            {
                !isAuth ? (
                    <>
                        <div className="container">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputText1" className="form-label">Nome</label>
                                    <input type="text" class="form-control" id="exampleInputText1"
                                        value={usuario} onChange={e => setUsuario(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={() => {
                                    localStorage.setItem("usuario", usuario);
                                    navigate('/privado')
                                }}>Login</button>
                            </form>
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className="container">
                                <button type="submit" class="btn btn-primary" onClick={() => {
                                    localStorage.removeItem("usuario");
                                    localStorage.removeItem("telefone");
                                    localStorage.removeItem("horas");
                                    localStorage.removeItem("valor_hora");
                                    navigate('/');
                                }}>Logout</button>
                            </div>
                        </>
                    )
            }
        </>
    )


}

export default Login;