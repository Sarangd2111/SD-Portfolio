import React from "react";
import "../stylesheets/cube.css";

const Cube = () => {
  return (
    <div className="container1" data-aos="zoom-out" data-aos-delay="1400">
      <div className="cube">
        <div className="face topface">
          <img src={require("../images/c++.png")} className="logo" alt="c++" />
        </div>
        <div className="face bottomface">
          <img src={require("../images/html.png")} className="logo" alt="html" />
        </div>
        <div className="face leftface">
          <img src={require("../images/js.png")} className="logo" alt="js" />
        </div>
        <div className="face rightface">
          <img src={require("../images/java.png")} className="logo" alt="java" />
        </div>
        <div className="face frontface">
          <img src={require("../images/python.png")} className="logo" alt="python" />
        </div>
        <div className="face backface">
          <img src={require("../images/mongodb.png")} className="logo" alt="mongo" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
