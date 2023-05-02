import React from "react";
import "../css/portfolio.css";
import Projectbox from "../components/projectbox";

const portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="nav-space"></div>
      <div className="portfolio-container">
        <div className="portfolio-text">
          <h1>My Work</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            tristique eros. Vestibulum pulvinar gravida tincidunt. Nullam vel
            ligula ut augue accumsan dignissim. Cras ut quam vestibulum,
            suscipit lacus at, venenatis tellus. Nam a libero vitae tellus
            venenatis bibendum.
          </p>
        </div>
        <div className="portfolio-projects">
          <div className="portfolio-projects-row">
            <Projectbox projectName="Omni Health App" />
            <Projectbox projectName="VR Live App" />
          </div>
          <div className="portfolio-projects-row">
            <Projectbox projectName="Mixa Orthopedics Responsive Website" />
            <Projectbox projectName="Immersive Insights" />
          </div>
          <div className="portfolio-projects-row">
            <Projectbox projectName="CommUnity Landing Page" />
            <Projectbox projectName="ProjectM8te Dashboard" />
          </div>
          <div className="portfolio-projects-row">
            <Projectbox projectName="hahahahah" />
            <Projectbox projectName="hahahahah" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
