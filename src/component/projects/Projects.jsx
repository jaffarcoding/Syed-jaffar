import React from "react";
import "./Projects.scss";
import "./ResProject.scss";
const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <div className="project-cards-1  rescards">
          <div className="first-items "></div>
          <div className="second-items">
            <h1>Awezome</h1>
            <p>Ecommerce web-app with payments and order featurs.</p>
            <h3>Techh Stack: MERN</h3>
            <a href="https://www.youtube.com/watch?v=MnLLoTTuX-k&t=7s">
              <button>Link</button>
            </a>
            <a href="https://github.com/jaffarcoding/AWEZOME-Ecommerce">
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project-cards-2 rescards">
          <div className="first-items">
          </div>
          <div className="second-items">
            <h1>Crypto tracker</h1>
            <p>
              this web-app is shows the real time data about crypto added <br />{" "}
              functionality like graph daily check filter Ect.
            </p>
            <h3>Tech Stack: Reactjs, Redux, Ect.</h3>
            <a href="https://crypto-five-swart.vercel.app/">
              <button>Link</button>
            </a>
            <a href="https://github.com/jaffarcoding/criptotracker">
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project-cards-3 rescards">
          <div className="first-items">
          </div>
          <div className="second-items">
            <h1>Portfolio</h1>
            <p>This Portfolio is animated web-app using ThreeJs Technology</p>
            <h3>Techk Stack: Mern & ThreeJs</h3>
            <a href="https://www.youtube.com/watch?v=QR5_pU-YwC0&t=9s">
              <button>Link</button>
            </a>
            <a href="https://github.com/jaffarcoding/porfolioJaffar">
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <span className="for-more">
          For More Projects:{" "}
          <a href="https://github.com/jaffarcoding">Click Here</a>
        </span>
      </div>
    </div>
  );
};

export default Projects;
