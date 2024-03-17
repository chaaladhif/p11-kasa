import LOGO from "../../assets/LOGO.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar__logo">
                    <img src={LOGO} alt="logo" />
                </div>
            </NavLink>
            <div className="navbar__link">
                <NavLink className="navbar__link--1" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navbar__link--2" to="/about">
                    A Propos
                </NavLink>
            </div>
        </nav>
    );
}
export default Navbar;
