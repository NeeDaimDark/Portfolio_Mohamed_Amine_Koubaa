import React from "react";
import { education } from "../../data/career";
import { useLanguage } from "../../i18n/LanguageContext";

const Education = () => {
  const { translate } = useLanguage();

  return (
    <>
      <div className="sm-title">
        <h4 className="font-alt">{translate("EDUCATION.TITLE")}</h4>
      </div>
      <ul className="aducation-box theme-bg">
        {education.map((item) => {
          const school = `${item.school ?? translate(`EDUCATION.${item.schoolKey}`)}, ${translate(`COUNTRIES.${item.country}`)}`;
          return (
            <li key={item.key}>
              <span className="dark-bg">{item.period}</span>
              <h6>{translate(`EDUCATION.${item.key}`)}</h6>
              <p>
                {item.url ? (
                  <a className="university-link" href={item.url} target="_blank" rel="noreferrer">
                    {school}
                  </a>
                ) : (
                  school
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Education;
