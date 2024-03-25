import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Usuario from "./Usuario";
import MenuPrivado from "./MenuPrivado";
import MenuPublico from "./MenuPublico";
import Login from "./Login";
import Sobre from "./Sobre";
import Salario from "./Salario";
import CalculaSalario from "./CalculaSalario";
import Imc from "./Imc";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "usuario",
        element : <Usuario/>
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "sobre",
        element : <Sobre/>
      }
    ]
  },
  {
    path : "/privado",
    element : <MenuPrivado/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path : "sobre",
        element : <Sobre/>
      },
      {
        path : "salario",
        element : <Salario/>
      },
      {
        path : "salario-calculado",
        element : <CalculaSalario/>
      },
      {
        path : "imc",
        element : <Imc/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
