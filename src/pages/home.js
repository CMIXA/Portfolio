import React from "react";
import "../css/home.css";
import me from "../images/me.png";
import me2 from "../images/me2.png";
import me3 from "../images/me3.png";
import me4 from "../images/me4.png";

const home = () => {
  return (
    <div className="home-page">
      <div className="nav-space"></div>
      <div className="home-section">
        <div className="h-left-div">
          <h1>Hi, Im Chris</h1>
          <h1>UI/UX Designer & Dev</h1>
          <p>
            UX Designer & Developer passionate about solving tech’s new
            challenges and creating effortless experiences
          </p>
          <div className="button-container">
            <button>Learn more about me</button>
            <button>Check out my work</button>
            {/* <Button1 />
            <Button1 /> */}
          </div>
        </div>
        <div className="h-right-div">
          <img src={me4} />
        </div>
      </div>
    </div>
  );
};

export default home;
