import React from "react";
import error from "../assets/404.png";
import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <div className="errorPage">
            <img src={error} alt="ErrorPage" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}
export default ErrorPage;
