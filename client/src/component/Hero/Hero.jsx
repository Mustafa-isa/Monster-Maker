import React from "react";

import "./hero.css";
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.jpg'
function Hero() {
  return (
    <div className="Hero_Container">
      <div className="info">
        <h1 className="head_text">
          A healthy planning platform to help you by provides you information,
          tools, and guidance to make informed decisions and take actions
          towards improving
          <span className="orange_gradient"> your health and wellbeing</span>.
        </h1>
        <p className="desc">
          A healthy planning platform is an invaluable resource for anyone looking
          to improve their health and wellbeing. 
        
        
        </p>
      </div>
  <div className="ImageContainer">
    <img className="imag1" src={image2} alt="" />
    <img className="imag2" src={image3} alt="" />
    <img className="imag3" src={image1} alt="" />
  </div>

    </div>
  );
}

export default Hero;
