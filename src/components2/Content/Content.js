import React, { useEffect, useState } from "react";
import '../../styles/Content.scss';
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

const Content = ({active, theme, setTheme}) => {

  return (
    <>
      {active === 'about' && <About theme={theme} setTheme={setTheme}/>}
      {active === 'skills' && <Work />}
      {active === 'work' && <Skills />}
    </>
  );
};

export default Content;

