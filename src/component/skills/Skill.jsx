import React from "react";
import "./Skill.scss";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Resskill.scss";
const Skill = () => {
  return (
    <section className="skill-set" id="skills">
      <h2 className="skill-section">Skills</h2>
      <span className="skill-subtitle">My Technical Skills</span>
      <div className="skill-container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skill;
