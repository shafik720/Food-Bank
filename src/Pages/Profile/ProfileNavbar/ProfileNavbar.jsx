import { NavLink } from 'react-router-dom';
// import './ProfileNavbar.css';
import './ProfileNavbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../Utilites/Firebase Auth/firebase.inti';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ProfileNavbar = () => {

    // --- getting user information
    const [user, loading, error] = useAuthState(auth);

    // --- modifying the profile menu for mobile view
    const [activeMobile, setActiveMobile] = useState(false);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (activeMobile && !document.querySelector(".mobile-menu-icon").contains(event.target)) {
              setActiveMobile(false);
            }
            console.log('clicked');
          }
        if(activeMobile){
            document.body.addEventListener('click',handleOutsideClick) ;
        }else{
            document.body.removeEventListener('click', handleOutsideClick)
        }
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }
    , [activeMobile])
    
    // const handleMobileMenu = () => {
    //     const menu = document.querySelector('.profile-navbar-div');
    //     menu.classList.add('activeMobile');
    // }

    return (
        <div className="">
            <div className={`profile-navbar-div ${activeMobile ? 'activeMobile' : ''}`}>
                <ul>
                    {/* <NavLink to='/profile/profileInfo' activeClassName="active">about</NavLink> */}
                    <li>
                        <NavLink to='/profile/profileInfo' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span special-radius1"><img src={user?.photoURL || 'https://i.ibb.co/g99nZMz/user.png'} alt="" /></span></span> <span className='menu-text'>Profile</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile/editProfile' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span special-radius2"><img src="https://i.ibb.co/5WDXr6R/user-avatar-1.png" alt="" /></span></span> <span className='menu-text'>Edit Profile</span></NavLink>
                    </li>
                    <li className='profile-li'>
                        <div className="relative">
                            <NavLink to='/profile/addReview' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span special-radius"><img src="https://i.ibb.co/pXgKmgC/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png" alt="" /></span></span> <span className='menu-text'>Add a Food Review</span></NavLink>
                        </div>
                    </li>
                    {/* <li>
                <NavLink to='/profile/editProfile' activeClassName="menu-active" className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src="https://i.ibb.co/wyyc0S0/user-avatar.png" alt="" /></span></span> <span className='menu-text'>Edit Profile</span></NavLink>
            </li> */}
                </ul>
            </div>
            <div className={`mobile-menu-icon ${activeMobile ? 'activeMobile' : ''}`} draggable onClick={() => setActiveMobile(!activeMobile)}>
                {/* <p><FontAwesomeIcon icon={faBars} /></p> */}
                <img className='w-4' src="https://i.ibb.co/wyYSy9T/dots-menu.png" alt="" />
            </div>
        </div>
    );
};

export default ProfileNavbar;