import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImage1 from "../assets/a.jpg";
import BannerImage2 from "../assets/b.jpg";
import BannerImage3 from "../assets/c.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="commonText"> Pizza cua Khang </h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
      >
        <div className="slide">
          <Link to="/menu">
            <img src={BannerImage1} alt="Pizza 1" />
          </Link>
        </div>
        <div className="slide">
          <Link to="/menu">
            <img src={BannerImage2} alt="Pizza 2" />
          </Link>
        </div>
        <div className="slide">
          <Link to="/menu">
            <img src={BannerImage3} alt="Pizza 3" />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
