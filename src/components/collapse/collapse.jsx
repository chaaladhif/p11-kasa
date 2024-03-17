import React, { useState } from "react";
import vector from "../../assets/Vector.png";
import "./collapse.scss";

function Collapse({ title, content }) {
    const [showContent, setShowContent] = useState(false);
    const handleToggle = () => {
        setShowContent(!showContent);
    };
    return (
        <>
            <div className="collapse">
                <div className="collapse__title" onClick={handleToggle}>
                    <h4>{title}</h4>
                    <img
                        src={vector}
                        alt="arrow down"
                        className={showContent ? "arrowUp" : "arrowDown"}
                    />
                </div>

                {showContent && (
                    <div className="collapse__description">
                        {Array.isArray(content) ? (
                            content.map((element) => {
                                return <p key={`${element}`}>{element}</p>;
                            })
                        ) : (
                            <p>{content}</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
export default Collapse;
