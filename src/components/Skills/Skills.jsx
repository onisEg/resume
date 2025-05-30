import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import SkillItem from "../Skill-item/SkillItem";
import { skillsData } from "../../skillsData.js";

export default function Skills() {
  return (
    <section id="Skills" className="st-dark-bg my-5">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SecTitle title="Skills & Tools" subTitle="Skills & Tools" />
      <div className="container">
        <div className="row d-flex align-items-end">
          {skillsData.map((item, index) => (
            <SkillItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
