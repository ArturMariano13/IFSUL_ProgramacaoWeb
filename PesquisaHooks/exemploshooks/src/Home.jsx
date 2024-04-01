import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const Home = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Pesquisa Hooks</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active" exact="true" to="/" class="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" exact="true" to="/usereducer">useReducer</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="/usecallback">useCallback</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="/usememo">useMemo</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" exact="true" to="/useref">useRef</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Home;