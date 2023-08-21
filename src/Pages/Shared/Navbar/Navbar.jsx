import './Navbar.css';
const Navbar = () => {
    return (
        <div className='menu-div px-5'>
            <div className="menubar flex justify-between items-center">
                <div className="menubar-left">
                    <h2 className="text-4xl font-bold">Food Lab</h2>
                </div>
                <div className="menubar-right">
                    <div className="menu-link">
                        <ul>
                            <li href="#" className='menu-parent'>Home
                                <div className="mini-menu">
                                    <span className='mini-menu-dot'><p>. . .</p> </span>
                                </div>
                            </li>
                            <li href="#">About</li>
                            <li href="#">Menu</li>
                            <li href="#">Restaurant</li>
                            <li href="#">Services</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;