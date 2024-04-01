import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import UseReducerComponent from './UseReducerComponent';
import UseCallbackComponent from './UseCallbackComponent';
import UseMemoComponent from './UseMemoComponent';
import UseRefComponent from './UseRefComponent';
import Menu from './Menu';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    children : [
      {
        index : true,
        element : <Menu/>
      },
      {
        path : "usereducer",
        element : <UseReducerComponent/>
      },
      {
        path : "usecallback",
        element : <UseCallbackComponent/>
      },
      {
        path : "usememo",
        element : <UseMemoComponent/>
      },
      {
        path : "useref",
        element : <UseRefComponent/>
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
