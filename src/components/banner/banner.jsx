import React from "react";
import "./banner.scss";
function Banner({ imageSrc, imageAlt, text }) {
    return (
        <div className="banner">
            <img src={imageSrc} alt={imageAlt} />
            <p className="banner__text">{text}</p>
        </div>
    );
}
export default Banner;
