import React, { Fragment } from "react";
import "./Scrollup.scss";
import { BsArrowUpSquareFill } from "react-icons/bs";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
  });
  return (
    <Fragment>
      <a href="#" className="scrollup show">
        <BsArrowUpSquareFill />
      </a>
    </Fragment>
  );
};

export default ScrollUp;
