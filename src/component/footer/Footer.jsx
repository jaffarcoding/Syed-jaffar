import React, { Fragment } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import "./Resfooter.scss";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <h2>SOK.</h2>
        <div className="nav-link-footers bot">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>
            <Link to={"./project"}>Projects</Link>
          </span>
          <span>
            <Link to={"./contact"}>Contacts</Link>
          </span>
        </div>
        <p>&copy; HyderabadiCoder All Rights Reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;
