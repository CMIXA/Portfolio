import React from "react";
import "../css/projectbox.css";

const Projectbox = (props) => {
  return (
    <div className="square-container">
      <a href={props.linkAddress}>
        <div class="square">
          <div class="text">{props.projectName}</div>
        </div>
      </a>
    </div>
  );
};

export default Projectbox;
