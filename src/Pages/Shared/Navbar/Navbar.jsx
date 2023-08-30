import './Navbar.css';
import menu1 from '../../../assets/img/menu.png';
import menu2 from '../../../assets/img/x.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // --- to ensure if the user has clicked the menu button in 'Mobile View'
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='menu-div px-5'>

            {/* --- Mobile Menu Icons Start --- */}
            <div className={`mobile-menu-icons ${isActive ? 'active' : ''}`}>
                <img src={menu1} alt="" draggable onClick={() => setIsActive(!isActive)} className="menuImgOne" />
                <img src={menu2} alt="" draggable onClick={() => setIsActive(!isActive)} className="menuImgTwo" />
            </div>
            {/* --- Mobile Menu Icons end --- */}

            {/* --------------- Menubar starts here --------------- */}
            <div className={`menubar max-md:flex-col max-md:justify-center flex justify-between items-center ${isActive ? 'active' : ''}`}>

                {/* --- Navbar Logo on Leftside --- */}
                <div className="menubar-left">
                    <h2 className="text-4xl font-bold max-md:hidden ">Food Lab</h2>
                </div>

                {/* --- Menu Items --- */}
                <div className="menubar-right">
                    <div className="menu-link">
                        <ul>
                            <Link to="/" className='menu-parent'>Home
                                <div className="mini-menu">
                                    <span className='mini-menu-dot'><p>. . .</p> </span>
                                </div>
                            </Link>
                            <Link to="/about" className='menu-parent'>About
                                <div className="mini-menu">
                                    <span className='mini-menu-dot'><p>. . .</p> </span>
                                    <div className="sub-menu">
                                        <div className="">
                                            <ul>
                                                <Link to='/about/demo'>Demo Link  </Link>
                                                <Link to='/about/demo'>Demo Link  </Link>
                                                <Link to='/about/demo'>Demo Link  </Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <li href="#" className='menu-parent'>Menu
                                <div className="mini-menu">
                                    <span className='mini-menu-dot'><p>. . .</p> </span>
                                    <div className="sub-menu">
                                        <div className="">
                                            <ul>
                                                <li>Demo Link  </li>
                                                <li>Demo Link</li>
                                                <li>Demo Link</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li href="#" className='menu-parent'>
                                <div className="mini-menu">
                                    <span className='mini-menu-dot'><p>. . .</p> </span>
                                    <div className="sub-menu">
                                        <div className="">
                                            <ul>
                                                <li>Demo Link  </li>
                                                <li>Demo Link</li>
                                                <li>Demo Link</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                Restaurant</li>
                            <Link to="/shop">Shop</Link>
                        </ul>

                    </div>
                </div>
            </div>

            {/* --------------- Menubar ends here --------------- */}

        </div>
    );
};

export default Navbar;