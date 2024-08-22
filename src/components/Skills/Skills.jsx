import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import SkillItem from "../Skill-item/SkillItem";

export default function Skills() {
  return (
    <>
      <section className="st-dark-bg my-5">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SecTitle title="Skills & Tools" subTitle="Skills & Tools" />
        <div className="container">
          <div className="row d-flex align-items-end">
            <SkillItem skillTile="react" img="/logos/React.webp" />
            <SkillItem
              skillTile="next.js"
              img="/logos/nextjs.png"
              style="filterInvert"
            />
            <SkillItem skillTile="matiral ui" img="/logos/matiralmi.png" />
            <SkillItem skillTile="typeScript" img="/logos/typescript-.webp" />
            <SkillItem skillTile="Bootstrap" img="/logos/bootstrap.png" />
            <SkillItem skillTile="figma" img="/logos/Figma.png" />
            <SkillItem
              skillTile="github"
              img="/logos/github.png"
              style="filterInvert"
            />
            <SkillItem
              skillTile="tailwind"
              img="/logos/tailwind-css.svg"
              style="filterInvert"
            />
            <SkillItem skillTile="json" img="/logos/json.png" />
            <SkillItem skillTile="html5" img="/logos/html5.png" />
            <SkillItem skillTile="javaScript" img="/logos/JavaScript.png" />
            <SkillItem skillTile="css" img="/logos/css3.png" />
            <SkillItem skillTile="sass" img="/logos/sass.png" />
            <SkillItem skillTile="vit.js" img="/logos/vitjs.png" />
            <SkillItem skillTile="Redux" img="/logos/redux.png" />
            <SkillItem skillTile="Postman" img="/logos/postman.png" />
            <SkillItem skillTile="VS code" img="/logos/vscode.png" />
            <SkillItem skillTile="Slack" img="/logos/Slack.png" />
          </div>
        </div>
      </section>
    </>
  );
}
