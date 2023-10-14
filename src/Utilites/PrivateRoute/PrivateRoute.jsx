import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { auth } from "../Firebase Auth/firebase.inti";

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth) ;
    const location = useLocation();

    if(loading){
        return  <div className="loader-in-middle"><ClipLoader color="blue" size={120} /></div> 
    }

    if(!loading && !user){
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children ; 
};

export default PrivateRoute;