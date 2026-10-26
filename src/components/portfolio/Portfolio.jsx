import React, { useCallback, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { projectCategories, projects } from "../../data/projects";
import caseStudies from "../../data/caseStudies.json";
import { useLanguage } from "../../i18n/LanguageContext";
import ProjectModal from "./ProjectModal";

const CASE_STUDY_CATEGORY = "WEB";
const TABS = [CASE_STUDY_CATEGORY, ...projectCategories];

const caseStudyCover = (caseStudy, language) =>
  `${process.env.PUBLIC_URL}/projects/${caseStudy.slug}/${(caseStudy.screens[language] ?? caseStudy.screens.en)[0]}`;

const isVideo = (source) => source.endsWith(".mp4");

const Portfolio = () => {
  const { translate, language } = useLanguage();
  const [gallery, setGallery] = useState(null);
  const [caseStudy, setCaseStudy] = useState(null);
  const closeCaseStudy = useCallback(() => setCaseStudy(null), []);

  const openGallery = (project) => setGallery({ project, index: 0 });
  const closeGallery = () => setGallery(null);
  const step = (offset) =>
    setGallery(({ project, index }) => ({
      project,
      index: (index + offset + project.media.length) % project.media.length,
    }));

  const projectsOf = (tab) => projects.filter((project) => project.category === tab);
  const caseStudiesOf = (tab) => (tab === CASE_STUDY_CATEGORY ? caseStudies : []);

  const current = gallery && gallery.project.media[gallery.index];

  return (
    <div className="portfolio-section">
      <Tabs>
        <TabList className="filter d-flex justify-content-center">
          {TABS.map((tab) => (
            <Tab key={tab}>{translate(`PORTFOLIO.CATEGORIES.${tab}`)}</Tab>
          ))}
        </TabList>

        {TABS.map((tab) => (
          <TabPanel key={tab}>
            <div className="portfolio-content row">
              {caseStudiesOf(tab).map((study) => (
                <div key={study.slug} className="col-lg-4 grid-item">
                  <button type="button" className="portfolio-box-01 case-study-card" onClick={() => setCaseStudy(study)}>
                    <div className="portfolio-img">
                      <img src={caseStudyCover(study, language)} alt={study.title} loading="lazy" />
                      <span className="case-study-play" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                    <div className="portfolio-info">
                      <h5>{study.title}</h5>
                      <p>{study.summary[language] ?? study.summary.en}</p>
                    </div>
                  </button>
                </div>
              ))}
              {projectsOf(tab).map((project) => (
                <div key={project.key} className="col-lg-4 grid-item">
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <img
                        src={project.media[0]}
                        alt={`${project.title} ${translate("PORTFOLIO.GALLERY.MEDIA")}`}
                        onClick={() => openGallery(project)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="portfolio-info">
                      <h5>{project.title}</h5>
                      <p>{translate(`PORTFOLIO.PROJECTS.${project.key}`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>

      {caseStudy && <ProjectModal project={caseStudy} onClose={closeCaseStudy} />}

      {gallery && (
        <div className="gallery-modal">
          <button className="gallery-close-button" onClick={closeGallery} aria-label={translate("PORTFOLIO.GALLERY.CLOSE")}>
            <span className="gallery-close-icon">×</span>
          </button>

          <div className="gallery-content">
            {isVideo(current) ? (
              <video key={current} controls className="media-display">
                <source src={current} type="video/mp4" />
              </video>
            ) : (
              <img
                src={current}
                alt={`${gallery.project.title} ${translate("PORTFOLIO.GALLERY.MEDIA")} ${gallery.index + 1}`}
                className="media-display"
              />
            )}
          </div>

          <div className="gallery-controls">
            <button
              className="gallery-button gallery-button-prev"
              onClick={() => step(-1)}
              aria-label={translate("PORTFOLIO.GALLERY.PREVIOUS")}
            >
              <span className="gallery-button-icon">‹</span>
            </button>
            <button
              className="gallery-button gallery-button-next"
              onClick={() => step(1)}
              aria-label={translate("PORTFOLIO.GALLERY.NEXT")}
            >
              <span className="gallery-button-icon">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
