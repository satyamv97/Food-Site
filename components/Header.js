import { logo } from "/config/logo";

const Header = () => {
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src = {logo} />
            </div>
            <div className="nav-container">
                <ul className="nav-item">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;