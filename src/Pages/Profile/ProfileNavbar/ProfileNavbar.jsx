import { NavLink } from 'react-router-dom';
import './ProfileNavbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../Utilites/Firebase Auth/firebase.inti';

const ProfileNavbar = () => {

    // --- getting user information
    const [user,loading, error] = useAuthState(auth) ; 
    console.log(user.photoURL);
    return (
        <div className="profile-navbar-div">
            <ul>
                {/* <NavLink to='/profile/profileInfo' activeClassName="active">about</NavLink> */}
                <li>
                    <NavLink to='/profile/profileInfo' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src={user?.photoURL || 'https://i.ibb.co/g99nZMz/user.png'} alt="" /></span></span> <span className='menu-text'>Profile</span></NavLink>
                </li>
                <li>
                    <NavLink to='/profile/editProfile' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span special-radius2"><img src="https://i.ibb.co/5WDXr6R/user-avatar-1.png" alt="" /></span></span> <span className='menu-text'>Edit Profile</span></NavLink>
                </li>
                <li>
                    <NavLink to='/profile/addReview' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span special-radius"><img src="https://i.ibb.co/pXgKmgC/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png" alt="" /></span></span> <span className='menu-text'>Add a Food Review</span></NavLink>
                </li>
                {/* <li>
                    <NavLink to='/profile/editProfile' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src="https://i.ibb.co/wyyc0S0/user-avatar.png" alt="" /></span></span> <span className='menu-text'>Edit Profile</span></NavLink>
                </li> */}
            </ul>
        </div>
    );
};

export default ProfileNavbar;