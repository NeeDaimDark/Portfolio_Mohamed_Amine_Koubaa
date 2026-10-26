import React from "react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageContext";

const About = () => {
  const { translate, language } = useLanguage();

  const details = [
    [
      { label: "ABOUT.AGE", value: translate("ABOUT.AGE_VALUE") },
      { label: "ABOUT.ORIGIN", value: translate("ABOUT.ORIGIN_VALUE") },
      { label: "ABOUT.ADDRESS", value: translate("ABOUT.ADDRESS_VALUE") },
    ],
    [
      { label: "ABOUT.EMAIL", value: profile.email },
      // { label: "ABOUT.PHONE", value: profile.phone },
      { label: "ABOUT.FREELANCE", value: translate("ABOUT.AVAILABLE") },
    ],
  ];

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-10 my-3">
        <div className="typo-box about-me">
          <h5>{profile.name}</h5>
          <h3>
            {translate("ABOUT.ROLE")} <span className="color-theme">{translate("ABOUT.ROLE_HIGHLIGHT")}</span>
          </h3>
          <p>{translate("ABOUT.TEXT")}</p>
          <div className="row about-list">
            {details.map((column, index) => (
              <div className="col-md-6" key={index}>
                {column.map((detail) => (
                  <div className="media" key={detail.label}>
                    <label>{translate(detail.label)}</label>
                    <p>{detail.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="btn-bar">
            <a className="px-btn px-btn-theme" href={profile.resumes[language]} target="_blank" rel="noreferrer" download>
              {translate("ABOUT.RESUME")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
