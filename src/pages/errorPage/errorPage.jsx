import React from "react";
import "./errorPage.scss";
import error from "../../assets/404.png";
import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <div className="errorPage">
            <img className="errorPage__img" src={error} alt="errorPage__img" />
            <p className="errorPage__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="errorPage__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}
export default ErrorPage;
