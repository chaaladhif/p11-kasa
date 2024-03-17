import React from "react";
import "./home.scss";
import datas from "../../data/data.json";
import bannerHome from "../../assets/banner.png";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
function Home() {
    return (
        <div>
            <Banner
                imageSrc={bannerHome}
                text={"Chez vous, partout et ailleurs"}
            />
            <div className="cards">
                {datas.map((data) => (
                    <Card
                        key={data.id}
                        title={data.title}
                        imageURL={data.cover}
                        id={data.id}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home;
