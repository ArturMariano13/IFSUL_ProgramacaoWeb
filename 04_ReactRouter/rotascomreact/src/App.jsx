import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Rotas from "./Rotas";
import Sobre from "./Sobre";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "rotas",
        element: <Rotas />
      },
      {
        path: "rotas/:id",
        element: <Rotas/> 
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <h1>Rotas com React</h1>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
