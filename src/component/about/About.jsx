import React, { useState } from "react";
import "./About.scss";
import Sok from "../../images/sok.jpg";
import Info from "../../info/Info";
import { AiOutlineClose } from "react-icons/ai";
import CV from "../../resume/Syed jaffar.pdf";
import "./Resabout.scss";
const About = () => {
  const [show, SetShow] = useState(false);
  const handler = () => {
    SetShow(true);
  };
  return (
    <section className="about section" id="abouts">
      <h2 className="section-title">About Me</h2>
      <span className="section_subtitle">My Intoduction</span>
      <div className="about-container conatiner grid">
        <img src={Sok} alt="" />
        <div className="about-data">
          <Info />
          <p className="about-discription">
            I am Frontend developer, I create web pages with UI / UX user
            Interface, and also i create wep-app in backend nodeJs. i am also
            mern stack developer and java developer, Currently I am looking for
            a job in frontend developer role
          </p>
          <a download="" href={CV} className="button">
            Download CV
          </a>
          <button className="btn-2" onClick={handler}>
            Read More
          </button>
        </div>
      </div>
      {show ? (
        <div className="qualification-content">
          <AiOutlineClose onClick={() => SetShow(false)} />
          <h2 className="Q-heading">Qualification</h2>
          <div className="Q-content">
            <p>Bachelore Of Commerce 2019-2022</p>
            <p>Commerce Economic Civics 2017-2019</p>
            <p>SSC X 2016-2017</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default About;
