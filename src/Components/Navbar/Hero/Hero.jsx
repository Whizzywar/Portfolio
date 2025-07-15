import React from "react";
import "./Hero.css";
import java from "../../../assets/java.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div>
      <div id="home" className="hero">
        <img src={java} alt="" />
        <h1>
          <span>I'm Ubani Wisdom, </span> frontend developer based in Nigeria.
        </h1>
        <p>
          I am frontend developer from FCT, Abuja with 3yrs experience in the
          tech industry
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
