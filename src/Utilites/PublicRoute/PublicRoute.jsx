import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase Auth/firebase.inti";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PublicRoute = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    // const location = useLocation();

    if(loading){
        return <div className="loader-in-middle"><ClipLoader color="black" size={120} /></div>
    }
    if(user && !loading){
        return navigate('/');
    }

    return children;
};

export default PublicRoute;