import React from "react";
import "../css/herosection.css";
import heroImg from "../assets/asset 1.jpeg";
import heroGif from "../assets/asset 2.gif";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroBg">
        <img src={heroImg} alt="" />
      </div>
      <div className="heroMain">
        <h1>
          Looking for Customized Technology Solutions for your RCM Business?
        </h1>
        <img src={heroGif} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
