import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Usuario from "./Usuario";
import MenuPrivado from "./MenuPrivado";
import MenuPublico from "./MenuPublico";
import Login from "./Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
