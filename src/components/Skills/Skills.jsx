import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import SkillItem from "../Skill-item/SkillItem";

export default function Skills() {
  return (
    <>
      <section className="st-dark-bg my-5">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SecTitle title="Skills" subTitle="Skills" />
        <div className="container">
          <div className="row d-flex align-items-end">
            <SkillItem
              skillTile="Bootstrap"
              img="/public/logos/bootstrap.png"
            />
            <SkillItem skillTile="css" img="/public/logos/css3.png" />
            <SkillItem skillTile="figma" img="/public/logos/Figma.png" />
            <SkillItem
              skillTile="github"
              img="/public/logos/github.png"
              style="filterInvert"
            />
            <SkillItem skillTile="html5" img="/public/logos/html5.png" />
            <SkillItem skillTile="javaScript" img="/public/logos/js.png" />
            <SkillItem skillTile="json" img="/public/logos/json.png" />
            <SkillItem
              skillTile="matiral ui"
              img="/public/logos/matiralmi.png"
            />
            <SkillItem
              skillTile="next.js"
              img="/public/logos/nextjs.png"
              style="filterInvert"
            />
            <SkillItem skillTile="react" img="/public/logos/React.webp" />
            <SkillItem skillTile="sass" img="/public/logos/sass.png" />
            <SkillItem
              skillTile="typeScript"
              img="/public/logos/typescript-.webp"
            />
            <SkillItem skillTile="vit.js" img="/public/logos/vitjs.png" />
          </div>
        </div>
      </section>
    </>
  );
}
