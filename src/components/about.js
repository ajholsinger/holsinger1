import React from "react";
import headShot from "../images/9A2A8274.JPG";

const About = () => (
  <div className="container-fluid about">
    <div className="aboutheading">About Me</div>
    <img src={headShot} alt="head" className="col-xs-5 col-sm-5 headShot" />
    <div className="titles-about">
      <div className="col-xs-7 webdev">
        Full Stack Web <span className="color">Developer</span>
      </div>
      <div className="col-xs-7 graphic-designer">
        Graphic <span className="color">Designer</span>
      </div>
      <div className="col-xs-7 videographer">Videographer</div>
    </div>
    <div class="col-xs-12 about-desc">
      "When I was <span className="color">14 years old,</span> I began learning
      about 3 things. Web Development, videography, and graphic design. These 3
      things immediately became my passions. At age 20, I was able to complete a
      coding bootcamp at
      <span className="color"> UNC Charlotte.</span> Here I was able to expand
      my skills drastically, and ultimately becoming a 'professional' developer.
      Ever since, I have been accepting new clients for all 3 specialties under
      my own name."
    </div>
  </div>
);

export default About;
