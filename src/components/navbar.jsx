import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar__logo">
                    <img src={LOGO} alt="logo" />
                </div>
            </NavLink>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about" className="line">
                A Propos
            </NavLink>
        </nav>
    );
}
export default Navbar;
