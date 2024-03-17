import React from "react";
import "./about.scss";
import bannerAbout from "../../assets/bannerAbout.png";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import dataAbout from "../../data/about.json";
function About() {
    return (
        <>
            <Banner imageSrc={bannerAbout} text={""} />
            <div className="collapses">
                {dataAbout.map(({ id, title, description }) => (
                    <Collapse key={id} title={title} content={description} />
                ))}
            </div>
        </>
    );
}
export default About;
