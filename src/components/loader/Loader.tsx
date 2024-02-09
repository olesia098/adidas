import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <div>
      <div className="pyramid-loader m-auto">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
