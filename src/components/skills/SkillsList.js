import React from "react";
import { dataSkills } from "../../store/data/dataSkills";
import { SkillCard } from "./SkillCard";
import "./skillslist.css";

export const SkillsList = ({ translate }) => {
  return (
    <div className="row">
      <div className="twelve columns collapsed">
        <h2 className="skillstitle">{translate("skills.title")}</h2>
        <div id="portfolio-wrapper" className="bgrid-sixths s-bgrid-thirds cf">
          {dataSkills.map((skill) => (
            <SkillCard key={skill.id} {...skill} translate={translate} />
          ))}
        </div>
      </div>
    </div>
  );
};
