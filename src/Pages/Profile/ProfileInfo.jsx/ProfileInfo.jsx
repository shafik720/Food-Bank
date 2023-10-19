import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Utilites/Firebase Auth/firebase.inti";
import './ProfileInfo.css';

const ProfileInfo = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div className="profile-info-div ">
            <h2 className="text-2xl font-semibold pb-4 text-center">Profile information</h2>
            <hr className="horizontal-for-profile-section" />
            <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-3">
                <div className="food-review-profile flex flex-col justify-center items-center gap-1 border border-4 border-blue-950 p-5 rounded-lg cursor-pointer hover:shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                    <img className="w-16" src="https://i.ibb.co/mvW2BFg/diet.png" alt="" />
                    <h2 className="font-bold mt-3"> Food Review</h2>
                    <p className="font-bold text-2xl text-pink-700">22</p>
                    <button className="btn btn-success btn-sm mt-3">View All</button>

                </div>

                <div className="restaurant-review-profile  flex flex-col justify-center items-center gap-1 border border-4 border-blue-950 p-5 rounded-lg cursor-pointer hover:shadow-[0_10px_15px_rgba(0,0,0,0.5)]">

                <img className="w-16" src="https://i.ibb.co/nrGZ3xc/cooking.png" alt="" />
                    <h2 className="font-bold mt-3"> Restaurant Review</h2>
                    <p className="font-bold text-2xl text-pink-700">32</p>
                    <button className="btn btn-success btn-sm mt-3">View All</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;