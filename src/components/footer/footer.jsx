import logoFooter from "../../assets/logoFooter.png";
import "./footer.scss";
function Footer() {
    return (
        <div className="footer">
            <img className="footer__img" src={logoFooter} alt="logo_footer" />
            <p className="footer__text">© 2024 Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;
