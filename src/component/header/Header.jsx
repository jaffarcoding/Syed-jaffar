import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { navLinks, navLinks2 } from "../data/Data";
import "./ResHeader.scss";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className="logo">
        <h1>SOK.</h1>
      </div>
      <nav className={show ? "res-nav" : "nav"}>
        <ul className="nav-item">
          {navLinks.map((links, i) => (
            <Link to={links.url} className="li" key={i}>
              {links.text}
            </Link>
          ))}
          {navLinks2.map((links, i) => (
            <a href={links.url} key={i} className="li">
              {links.text}
            </a>
          ))}
        </ul>
        <a href="mailto:omersyed479@gmail.com" id="em">
          <button>Email</button>
        </a>
      </nav>
      <button className="bars" onClick={() => setShow(!show)}>
        {show ? <MdClose /> : <GoThreeBars />}
      </button>
    </header>
  );
};

export default Header;
