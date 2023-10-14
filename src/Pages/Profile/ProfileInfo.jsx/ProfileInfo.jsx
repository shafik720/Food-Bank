import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Utilites/Firebase Auth/firebase.inti";

const ProfileInfo = () => {
    const [user,loading, error] = useAuthState(auth) ; 
    // console.log(user);
    return (
        <div>
            <h2>Profile info Here</h2>
        </div>
    );
};

export default ProfileInfo;