import './ProfileNavbar.css' ; 

const ProfileNavbar = () => {
    return (
        <div className="profile-navbar-div">
            <ul>
                <li className='flex flex-col justify-center items-center gap-2 menu-active relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src="https://i.ibb.co/g6pKwGc/cutlery-1.png" alt="" /></span></span> <span className='menu-text'>Home</span></li>
                <li className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src="https://i.ibb.co/g6pKwGc/cutlery-1.png" alt="" /></span></span> <span className='menu-text'>Home</span></li>
                <li className='flex flex-col justify-center items-center gap-2  relative'> <span className='menu-outer-span'> <span className="menu-inner-span"><img src="https://i.ibb.co/g6pKwGc/cutlery-1.png" alt="" /></span></span> <span className='menu-text'>Home</span></li>
                {/* <li>About</li>
                <li>Menu</li>
                <li>Contact</li> */}
            </ul>
        </div>
    );
};

export default ProfileNavbar;