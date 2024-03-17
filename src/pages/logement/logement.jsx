import React from "react";
import "./logement.scss";
import Carousel from "../../components/carousel/carousel";
import data from "../../data/data.json";
import { useParams, Navigate } from "react-router-dom";
import Description from "../../components/description/description";
import Tag from "../../components/tag/tag";
import User from "../../components/user/user";
import RatingStars from "../../components/rating/rating";
import Collapse from "../../components/collapse/collapse";
function Logement() {
    const { id } = useParams();
    let logement = data.find((item) => item.id === id);
    if (!logement) {
        return <Navigate to="*" />;
    }
    const {
        title,
        host,
        location,
        tags,
        rating,
        pictures,
        description,
        equipments,
    } = logement;
    return (
        <>
            <Carousel pictures={pictures} />
            <div className="description">
                <div className="description__left">
                    <Description title={title} location={location} />
                    <Tag tags={tags} />
                </div>
                <div className="description__right">
                    <User hostname={host.name} hostpicture={host.picture} />
                    <RatingStars ratingStars={rating} />
                </div>
            </div>
            <div className="description__collapse">
                <Collapse title="description" content={description} />
                <Collapse title="equipements" content={equipments} />
            </div>
        </>
    );
}

export default Logement;
