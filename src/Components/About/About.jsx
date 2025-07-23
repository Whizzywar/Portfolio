import React from "react";
import "./About.css";
import whizzy_dev from "../../assets/whizzy_dev.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={whizzy_dev} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Ubani Wisdom a Driven and Enthusiastic Frontend Developer
              with 3 years of experience in building user interfaces for great
              user experience. I guarantee that my designs are not only visually
              appealing but functional and efficient, testing and debugging are
              not just mere processes for me but rather an exploration and
              adventure to widen my horizon and bring seamless functionalities
              to the software world.
            </p>
            <p>
              Below are tech stack and tools I use for my projects, to turn
              every line of code into a masterpiece.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
