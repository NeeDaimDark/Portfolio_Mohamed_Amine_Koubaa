import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";
import { useLanguage } from "../../i18n/LanguageContext";

const Slider = () => {
  const { translate, language } = useLanguage();
  const article = translate("HERO.ARTICLE");

  return (
    <section
      id="home"
      className="home-banner overlay "
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/img/banner/bg.png"})` }}
    >
      <div className="frame-layout__particles"></div>
      <div className="container">
        <div className="row align-items-center full-screen">
          <div className="col-lg-12">
            <div className="hb-typo ">
              <h1 className="font-alt">
                {translate("HERO.GREETING")}
                <br /> {translate("HERO.INTRO")}
                <br /> {article && `${article} `}
                <TextLoop key={language}>
                  <span className="loop-text">{translate("HERO.ROLE_FULL_STACK")}</span>
                  <span className="loop-text">{translate("HERO.ROLE_DEVOPS")}</span>
                </TextLoop>
              </h1>
              <div className="btn-bar mt-4">
                <a className="px-btn px-btn-theme btn-md" href="#about">
                  {translate("HERO.DISCOVER")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-bottom go-to">
        <a href="#about">{translate("HERO.SCROLL")}</a>
      </div>
      <Social />
    </section>
  );
};

export default Slider;
