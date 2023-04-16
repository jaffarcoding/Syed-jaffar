import React from "react";
const Qualification = ({ show }) => {
  console.log(show);
  return (
    <div className="qualification-content">
      <h2 className="Q-heading">Qualification</h2>
      <div className="Q-content">
        <p>Bachelore Of Commerce 2019-2022</p>
        <p>Commerce Economic Civics</p>
        <p>SSC 10</p>
      </div>
    </div>
  );
};

export default Qualification;
