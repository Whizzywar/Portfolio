import React from "react";
import "./Hero.css";
import whizzy_p from "../../../assets/whizzy_p.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div>
      <div id="home" className="hero">
        <img src={whizzy_p} alt="" />
        <h1>
          <span>I am Wisdom </span> a Frontend Developer
        </h1>
        <p>
          that posses strong foundation in web development with passion for
          creating aesthetically pleasing interfaces using frontend
          technologies. 
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
