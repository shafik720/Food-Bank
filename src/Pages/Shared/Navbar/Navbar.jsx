import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="menubar flex justify-between items-center">
                <div className="menubar-left">
                    <h2 className="text-4xl font-bold">Food Lab</h2>
                </div>
                <div className="menubar-right">
                    <div className="menu-link">
                        <ul>
                            <li href="#">Home</li>
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