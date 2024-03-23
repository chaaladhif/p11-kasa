import LOGO from "../../assets/LOGO.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="navbar__logo" to="/">
                <img src={LOGO} alt="logo" />
            </NavLink>
            <div className="navbar__link">
                <NavLink className="navbar__link__item" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navbar__link__item" to="/about">
                    A Propos
                </NavLink>
            </div>
        </nav>
    );
}
export default Navbar;
