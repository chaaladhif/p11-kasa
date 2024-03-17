import "./rating.scss";
import greyStar from "../../assets/grey star.png";
import redStar from "../../assets/red star.png";
function RatingStars({ ratingStars }) {
    const ratings = Array.from({ length: 5 }).map((rating, index) => {
        const numberOfStars = index + 1;

        return (
            <span className="rating" key={index}>
                {ratingStars >= numberOfStars ? (
                    <img
                        className="redStar"
                        src={redStar}
                        alt="red Star"
                        rating={rating}
                    />
                ) : (
                    <img
                        className="greyStar"
                        src={greyStar}
                        alt="grey star"
                        rating={rating}
                    />
                )}
            </span>
        );
    });
    return (
        <>
            <div className="rating">{ratings}</div>
        </>
    );
}

export default RatingStars;
