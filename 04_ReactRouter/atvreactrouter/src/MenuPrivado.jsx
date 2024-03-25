import { NavLink, Outlet } from "react-router-dom";

const MenuPrivado = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Atividade React Router</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active" exact="true" to="/privado" class="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="usuario">Usuário</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="sobre">Sobre</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="salario">Salário</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="imc">IMC</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="login">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default MenuPrivado;