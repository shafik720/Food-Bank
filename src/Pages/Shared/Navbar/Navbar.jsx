import './Navbar.css';
import menu1 from '../../../assets/img/menu.png';
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);

    return (
        <div className='menu-div px-5'>
            <div className={`mobile-menu-icons ${isActive ? 'active' : ''}`}>
                <img src={menu1} alt="" draggable onClick={()=>setIsActive(!isActive)} />
            </div>
            <div className={`menubar max-md:flex-col max-md:justify-center flex justify-between items-center ${isActive ? 'active' : ''}`}>
                <div className="menubar-left">
                    <h2 className="text-4xl font-bold max-md:hidden ">Food Lab</h2>
                </div>
                <div className="menubar-right">
                    <div className="menu-link">
                        <ul>
                            <li href="#" className='menu-parent'>Home
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
                            <li href="#"  className='menu-parent'>About
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
                            <li href="#"  className='menu-parent'>Menu
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
                            <li href="#"  className='menu-parent'>
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
                            <li href="#">Services</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;