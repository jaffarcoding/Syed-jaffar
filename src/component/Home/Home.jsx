import React, { Fragment } from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import Photo from "../../images/phto.jpg";
import About from "../about/About";
import Skill from "../skills/Skill";
import Profile from "../profile/Profile";
import "./ResHome.scss";
import { motion } from "framer-motion";
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <Fragment>
      <div className="home" id="#">
        <section className="container">
          <div>
            <motion.h1 className="topline" {...animations.h1}>
              Hello<span>__</span>
              <br />
              Syed <span>Jaffar.</span>
            </motion.h1>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Java Developer",
                  "Mern Stack Developer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewritter",
              }}
            />
            <a href="mailto:omersyed479@gmail.com">
              <button className="btn-1">Hire Me</button>
            </a>
          </div>
        </section>
        <section className="photo">
          <img src={Photo} alt="" />
        </section>
      </div>
      <About />
      <Skill />
      <Profile />
    </Fragment>
  );
};

export default Home;
