import React from "react";
import Header from "../../components/header/HeaderFluid";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Certificates from "../../components/certificates/Certificates";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";
import { useLanguage } from "../../i18n/LanguageContext";

const SectionTitle = ({ children }) => (
  <div className="row justify-content-center section-title text-center">
    <div className="col-lg-7">
      <h3 className="font-alt">{children}</h3>
    </div>
  </div>
);

const HomeDark = () => {
  const { translate } = useLanguage();
  useDocumentTitle(translate("DOCUMENT.TITLE"));

  return (
    <div className="home-dark">
      <Header />
      <Slider />

      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>

      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <SectionTitle>{translate("SERVICES.TITLE")}</SectionTitle>
          <Service />
        </div>
      </section>

      <section className="section skill-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-3">
              <Experience />
            </div>
            <div className="col-lg-6 my-3">
              <Education />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-3">
              <Certificates />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-3">
              <Skills />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section gray-bg">
        <div className="container">
          <SectionTitle>{translate("PORTFOLIO.TITLE")}</SectionTitle>
          <Portfolio />
        </div>
      </section>

      <section id="contact" className="section after-left-section">
        <div className="container">
          <Contact />
        </div>
      </section>

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeDark;
