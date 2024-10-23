import React, { useEffect, useState } from "react";
import "../../styles/NavBar.scss";

const NavBar = ({ handleClick, active }) => {
  return (
    <div className="toggle-container">
      <div className={`toggle-button ${active}`}></div>
      {/* <div className={`nav-item ${active === 'exp' && 'activeNavItem'}`} onClick={() => handleClick("exp")}>
        Experience It
        <img src={require("../../img/star.png")} />
      </div> */}
      <div className={`nav-item ${active === 'about' && 'activeNavItem'}`} onClick={() => handleClick("about")}>
        About
      </div>
      <div className={`nav-item ${active === 'skills' && 'activeNavItem'}`}  onClick={() => handleClick("skills")}>
        Work
      </div>
      <div className={`nav-item ${active === 'work' && 'activeNavItem'}`} onClick={() => handleClick("work")}>
        Skills & Tools
      </div>
      <div className={`nav-item ${active === 'portfolio' && 'activeNavItem'}`} onClick={() => handleClick("portfolio")}>
        Portfolio
      </div>
    </div>
  );
};

export default NavBar;
