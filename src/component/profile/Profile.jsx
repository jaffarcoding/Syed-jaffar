import React from "react";
import "./Profile.scss";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import "./Resprofile.scss";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-hading">
        <h2>Profile Links</h2>
      </div>
      <div>
        <article>
          <a href="https://www.linkedin.com/in/syed-jaffar-418911235/">
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <GrLinkedinOption />
              <a href=""></a>
              <p>LinkDin</p>
            </div>
          </a>
          <a href="https://github.com/jaffarcoding">
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillGithub />
              <p>GitHub</p>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCJ54RHvXMEvaz-VYLXm1AEg">
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <FiYoutube />
              <p>Youtube</p>
            </div>
          </a>
          <a href="https://www.instagram.com/syedomerk/">
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <FiInstagram />
              <p>Instagram</p>
            </div>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Profile;
