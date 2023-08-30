import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Shop from "../../Pages/Shop/Shop";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/shop',
        element: <Shop></Shop>
      }
    ]
  },
]);