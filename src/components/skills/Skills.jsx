import React from "react";
import { skillGroups } from "../../data/skills";
import { useLanguage } from "../../i18n/LanguageContext";

const Skills = () => {
  const { translate } = useLanguage();

  const label = (skill) => (typeof skill === "string" ? skill : translate(`SKILLS.NAMES.${skill.key}`));

  return (
    <>
      <div className="sm-title">
        <h4 className="font-alt">{translate("SKILLS.TITLE")}</h4>
      </div>
      <div className="row">
        {skillGroups.map((group) => (
          <div className="col-md-6 col-lg-4 skill-group" key={group.key}>
            <h6>{translate(`SKILLS.GROUPS.${group.key}`)}</h6>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={typeof skill === "string" ? skill : skill.key}>{label(skill)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
