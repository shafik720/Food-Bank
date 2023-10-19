import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";

const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Profile</title>
                <link rel="icon" type="image/svg+xml" href="https://i.ibb.co/g6pKwGc/cutlery-1.png" />
            </Helmet>
            <Navbar></Navbar>
            <ProfileNavbar></ProfileNavbar>
            <div className="flex flex-col mt-28 items-center min-h-screen md:ms-44 md:me-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Profile;