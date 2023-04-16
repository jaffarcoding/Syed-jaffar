import React from "react";
import {  backendskill1, backendskill2 } from "../data/Data";
import { VscDebugBreakpointLog } from "react-icons/vsc";
const Backend = () => {
  return (
    <div className="skill-content">
      <h3 className="skills-title">Backend Developer</h3>
      <div className="skill-box">
        <div className="skill-group">
          {backendskill1.map((skills) => (
            <div className="skill-data">
              <VscDebugBreakpointLog />
              <div>
                <h3 className="Skills-name">{skills.text}</h3>
                <span className="skill-level">{skills.level}</span>{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="skill-group">
          {backendskill2.map((skills) => (
            <div className="skill-data">
              <VscDebugBreakpointLog />
              <div>
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

export default Backend;
