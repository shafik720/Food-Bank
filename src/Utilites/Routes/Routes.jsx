import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Shop from "../../Pages/Shop/Shop";
import Signup from "../../Pages/Profile/Signup/Signup";
import Login from "../../Pages/Profile/Login/Login";
import PublicRoute from "../PublicRoute/PublicRoute";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
        path: '/signup',
        element: <PublicRoute><Signup></Signup></PublicRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/shop',
        element: <Shop></Shop>
      }
    ],    
  },
  {
    path : '*',
    element : <ErrorPage></ErrorPage>
  },
]);