import React from "react";
import "../../styles/Skills.scss";
import KnowledgeScale from "./KnowledgeScale";

const Skills = ({ active }) => {
  const tools = [
    {
      url: require("../../img/tools/vscode.png"),
    },
    {
      url: require("../../img/tools/webstorm.png"),
    },
    {
      url: require("../../img/tools/git.png"),
    },
    {
      url: require("../../img/tools/postman.png"),
    },
    {
      url: require("../../img/tools/xcode.png"),
    },
    {
      url: require("../../img/tools/android.png"),
    },
    {
      url: require("../../img/tools/blender.png"),
    },
    {
      url: require("../../img/tools/vscode.png"),
    },
    {
      url: require("../../img/tools/webstorm.png"),
    },
    {
      url: require("../../img/tools/git.png"),
    },
    {
      url: require("../../img/tools/postman.png"),
    },
    {
      url: require("../../img/tools/xcode.png"),
    },
    {
      url: require("../../img/tools/android.png"),
    },
    {
      url: require("../../img/tools/blender.png"),
    },
    {
      url: require("../../img/tools/vscode.png"),
    },
    {
      url: require("../../img/tools/webstorm.png"),
    },
    {
      url: require("../../img/tools/git.png"),
    },
    {
      url: require("../../img/tools/postman.png"),
    },
    {
      url: require("../../img/tools/xcode.png"),
    },
    {
      url: require("../../img/tools/android.png"),
    },
    {
      url: require("../../img/tools/blender.png"),
    },
  ];

  const Marquee = () => {
    return (
      <div className="marquee-container box centering">
        <div className="marquee marqueeVertical centering">
          {tools.map((tool, index) => (
            <img src={tool.url} key={index} />
          ))}
        </div>
      </div>
    );
  };

  const SkillItem = ({ label, level }) => {
    return (
      <div className="skillWrap">
        <div className="skillDecor"></div>
        <div className="skill">{label}</div>
        <KnowledgeScale level={level} />
      </div>
    );
  };

  return (
    <div className="Skills">
      <Marquee />
      <div className="box box2">
        <div className="skillsWrapper">
          <SkillItem label={"HTML"} level={6} />
          <SkillItem label={"CSS / SCSS"} level={8} />
          <SkillItem label={"JavaScript"} level={5} />
          <SkillItem label={"React"} level={7} />
          <SkillItem label={"React Native"} level={4} />
          <SkillItem label={"Next.js"} level={4} />
          <SkillItem label={"Tailwind CSS"} level={8} />
          <SkillItem label={"Material UI"} level={8} />
          <SkillItem label={"shadcn/ui"} level={6} />
          <SkillItem label={"Redux"} level={7} />
          <SkillItem label={"RTK Query"} level={5} />
          <SkillItem label={"TypeScript"} level={5} />
          <SkillItem label={"Node.js"} level={3} />
          <SkillItem label={"AWS Lambda"} level={3} />
          <SkillItem label={"Three.js"} level={2} />
        </div>
      </div>
    </div>
  );
};

export default Skills;