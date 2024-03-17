import "./card.scss";
import { Link } from "react-router-dom";
function Card(props) {
    return (
        <div className="card">
            <Link to={`/Logement/${props.id}`}>
                <img src={props.imageURL} alt={props.title} />
                <div className="card__title">{props.title}</div>
            </Link>
        </div>
    );
}
export default Card;
