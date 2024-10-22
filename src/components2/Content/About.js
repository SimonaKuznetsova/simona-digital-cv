import React, { useEffect, useState } from "react";
import "../../styles/About.scss";
import StatusIndicator from "./StatusIndicator";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import UniqueBox from "./UniqueBox";
import Explore from "./Explore";
import ReactIcon from "../ReactIcon/ReactIcon";

const About = ({ active, theme, setTheme }) => {

  const pdfUrl = require("../../img/cv-kuznetsova.pdf");

  return (
    <div className="About">
      <div className="leftCol">
        <div className="two-items">
          <div className="Linkedin centering box box4">
            <a
              href="https://www.linkedin.com/in/simona-kuznetsova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon label="LinkedIn" />
            </a>
          </div>

          <div className="Email centering box box4 box5">
            <a
              href="https://t.me/simkapeppa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon label="Telegram" />
            </a>
          </div>

          <div className="Telegram centering box box4 box7">
            <a
              href="mailto:simonakuznecova@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactIcon label="Mail" />
            </a>
          </div>
        </div>

        {/*------ BOX for avatar */}
        <div className="centering AvatarWrap box box1">
          <div className="avatar centering">
            <div className="circle">
              {/* <img /> */}
            </div>
          </div>

          {/* <div>
            <div className="avatarName">Simona Kuznetsova</div>

            <div className="avatarStatus">
              <StatusIndicator />
              Available for a full-time position
            </div>
          </div> */}
        </div>

        <div className="marquee-container box overview-animated">
          <div className="marquee">
            {[
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
              "Professional Overview",
              "My Profile",
              "Digital CV",
            ].map((tool, index) => (
              <div className="item" key={index}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col2">
        {/*------ BOX for short description */}
        <div className=" box box2">
          <div>
            <div className="titleWrap">
              <div className="textWrap">
                <div className="tagWrap">
                  <div className="wrapMid">
                    <div className="centering tag  tag1 tagPrimary">
                      FRONT END
                    </div>
                    <div className="centering tag  tag2 tagSecondary">
                      REACT
                    </div>
                    <div className="centering tag tag3 ">Work-life balance</div>
                    <div className="centering tag tag3 ">Full-time</div>
                    <div className="centering tag tag2 ">Blackout Ready</div>
                    <div className="centering tag tag4 ">Remote</div>
                    <div className="centering tag tag5 ">Long-term</div>
                  </div>
                </div>
                <div className="title">
                  Hey you all. <br />
                  I'm <span style={{ fontWeight: 600 }}>Simona</span> Kuznetsova
                </div>
              </div>

              <div className="React"></div>
            </div>

            {/* <hr /> */}

            <div className="description">
              I have a great passion for coding and debugging, and I am
              dedicated to building intuitive, responsive, and beautiful
              solutions for web applications.
              {/* I have a solid knowledge base for creating great websites. But now
              I’m completely ready for something radically new and can’t wait to
              explore a different path. */}
            </div>
          </div>
        </div>

        <div className="additional">
          <div className="Map centering box box3">
            <div></div>
          </div>

          <div className="centering Resume box box6">
            <div className="resumeLabel">
              <div className="resumeSubtitle">2024 CV</div>
              <div className="resumeTitle">RESUME</div>
            </div>

            <div className="resumeBtns">
              {/* <img src={require("../../img/eye-cv.png")} width={25} />
              <img src={require("../../img/download-cv.png")} width={25} /> */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
              >
                {/* <img
                  src={require("../../img/eye-cv.png")}
                  width={25}
                  alt="View CV"
                  style={{ cursor: "pointer" }}
                /> */}
                <ReactIcon label="eye" />
              </a>

              <a
                href={pdfUrl}
                download="cv-kuznetsova.pdf"
                style={{ display: "inline-block" }}
              >
                {/* <img
                  src={require("../../img/download-cv.png")}
                  width={25}
                  alt="Download CV"
                  style={{ cursor: "pointer" }}
                /> */}
                <ReactIcon label="load" />
              </a>
            </div>
          </div>

          <div className="uniqueBoxWrap">
            <img
              src={require("../../img/uniqueBox.png")}
              className={`uniqueBoxImg ${theme}`}
            />

            <img
              src={require("../../img/uniqueBoxFilled.png")}
              className={`uniqueBoxImgFilled ${theme}-filled`}
            />

            <div className="educationWrap">
              <div className="education">Education</div>
              <div className="nameUniversity">
                Oles Honchar Dnipro National University
              </div>
              <div className="positionUniversity">
                Bachelor. Direction: "Higher Math"
              </div>
            </div>

            {/* -----Themes selection----- */}
            <div className="box box8 centering">
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
