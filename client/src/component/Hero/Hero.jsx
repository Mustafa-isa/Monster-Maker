import React from "react";
import HeroLogo from "../../assets/hero.png";
import "./hero.css";
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
      <img  className='hero'src={HeroLogo} alt="Hero" />

    </div>
  );
}

export default Hero;
