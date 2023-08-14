import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);