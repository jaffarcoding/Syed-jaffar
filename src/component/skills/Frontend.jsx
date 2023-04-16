import React from "react";
import { frontendskill1, frontendskill2 } from "../data/Data";
import { VscDebugBreakpointLog } from "react-icons/vsc";
const Frontend = () => {
  return (
    <div className="skill-content">
      <h3 className="skills-title">Frontend Developer</h3>
      <div className="skill-box">
        <div className="skill-group">
          {frontendskill1.map((skills, i) => (
            <div className="skill-data">
              <VscDebugBreakpointLog />
              <div key={i}>
                <h3 className="Skills-name">{skills.text}</h3>
                <span className="skill-level">{skills.level}</span>{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="skill-group">
          {frontendskill2.map((skills, i) => (
            <div className="skill-data">
              <VscDebugBreakpointLog />
              <div key={i}>
                <h3 className="Skills-name">{skills.text}</h3>
                <span className="skill-level">{skills.level}</span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
