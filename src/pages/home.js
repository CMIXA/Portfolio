import React from "react";
import "../css/home.css";
import me from "../images/me.png";
import me2 from "../images/me2.png";

const home = () => {
  return (
    <div className="home-page">
      <div className="nav-space"></div>
      <div className="home-section">
        <div className="left-div">
          <h1>UI/UX Designer & Dev</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            tristique eros. Vestibulum pulvinar gravida tincidunt. Nullam vel
            ligula ut augue accumsan dignissim.
          </p>
          <div className="button-container">
            <button>Learn more about me</button>
            <button>Check out my work</button>
            {/* <Button1 />
            <Button1 /> */}
          </div>
        </div>
        <div className="right-div">
          <img src={me2} />
        </div>
      </div>
    </div>
  );
};

export default home;
