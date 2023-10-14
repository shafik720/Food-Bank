import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Shop from "../../Pages/Shop/Shop";
import Signup from "../../Pages/Profile/Signup/Signup";
import Login from "../../Pages/Profile/Login/Login";
import PublicRoute from "../PublicRoute/PublicRoute";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Profile from "../../Pages/Profile/Profile";
import ProfileInfo from "../../Pages/Profile/ProfileInfo.jsx/ProfileInfo";
import EditProfile from "../../Pages/Profile/EditProfile/EditProfile";
import FoodReview from "../../Pages/Profile/FoodReview/FoodReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <PublicRoute><Login></Login></PublicRoute>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      }
    ],    
  },
  {
    path: '/profile',
    element: <PrivateRoute><Profile></Profile></PrivateRoute>,
    children : [
      {
        path : '/profile',
        element : <ProfileInfo></ProfileInfo>
      },
      {
        path : '/profile/profileInfo',
        element : <ProfileInfo></ProfileInfo>
      },
      {
        path : '/profile/addReview',
        element : <FoodReview></FoodReview>
      },
      {
        path : '/profile/editProfile',
        element : <EditProfile></EditProfile>
      }
    ]
  },
  {
    path : '*',
    element : <ErrorPage></ErrorPage>
  },
]);