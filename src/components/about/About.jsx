import React from "react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageContext";

const About = () => {
  const { translate, language } = useLanguage();

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-10 my-3">
        <div className="typo-box about-me">
          <h5>{profile.name}</h5>
          <h3>
            {translate("ABOUT.ROLE")} <span className="color-theme">{translate("ABOUT.ROLE_HIGHLIGHT")}</span>
          </h3>
          <p>{translate("ABOUT.TEXT")}</p>
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
