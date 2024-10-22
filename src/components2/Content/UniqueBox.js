import React, { useEffect, useState } from "react";
import "../../styles/UniqueBox.scss";
import About from "./About";
import Skills from "./Skills";

const UniqueBox = () => {
  return (
    //   <div className="letter-g">
    //     <div className="letter-g-top"></div>
    //     <div className="letter-g-side"></div>
    //   </div>
    <div className="uniqueBox">
      <div className="container">
        <img
          src={require("../../img/uniqueBox.png")}
          alt="Transparent figure"
          className="transparent-image"
        />
      </div>
    </div>
  );
};

export default UniqueBox;
