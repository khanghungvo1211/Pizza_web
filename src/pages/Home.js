import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImage1 from "../assets/d.jpg";
import BannerImage2 from "../assets/e.jpg";
import "../styles/Home.css";
function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="home">
      {/* Add a button to toggle the dropdown */}
      <button className="dropdown-button" onClick={toggleDropdown}>
        Hi
      </button>

      {/* Render the dropdown menu based on the state */}
      {isDropdownOpen && (
        <div className="dropdown-content">
          {/* Dropdown content goes here */}
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      )}
  <div class="lower-section">
  </div>

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
      </Carousel>
    </div>
  );
}


export default Home;
