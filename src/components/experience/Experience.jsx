import React from "react";
import { experiences } from "../../data/career";
import { useLanguage } from "../../i18n/LanguageContext";

const Experience = () => {
  const { translate, formatMonth } = useLanguage();

  const period = (experience) =>
    experience.period ??
    `${formatMonth(experience.start)} – ${experience.end ? formatMonth(experience.end) : translate("EXPERIENCE.PRESENT")}`;

  return (
    <>
      <div className="sm-title">
        <h4 className="font-alt">{translate("EXPERIENCE.TITLE")}</h4>
      </div>
      <ul className="aducation-box dark-bg">
        {experiences.map((experience) => (
          <li key={experience.key}>
            <span className="theme-bg">{period(experience)}</span>
            <h6>{translate(`EXPERIENCE.ROLES.${experience.role}`)}</h6>
            <p>
              {experience.company}, {translate(`COUNTRIES.${experience.country}`)}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;
