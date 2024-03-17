import React, { useState } from "react";
import "./carousel.scss";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
function Carousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const previousSlide = () => {
        const index =
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1;
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        const index =
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(index);
    };

    return (
        <div className="carousel">
            <img
                className="carousel__slide"
                src={pictures[currentSlide]}
                alt="logement"
            />
            {pictures.length > 1 && (
                <>
                    <img
                        className="arrow_left arrow"
                        onClick={previousSlide}
                        src={arrowLeft}
                        alt="Previous slide"
                    />
                    <img
                        className="arrow_right arrow"
                        onClick={nextSlide}
                        src={arrowRight}
                        alt="Next slide"
                    />
                </>
            )}
            <div className="carousel__count">
                {pictures.length > 1
                    ? `${currentSlide + 1}/${pictures.length}`
                    : ""}
            </div>
        </div>
    );
}
export default Carousel;
