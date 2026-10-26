import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const assetUrl = (project, file) => `${process.env.PUBLIC_URL}/projects/${project.slug}/${file}`;

const ProjectModal = ({ project, onClose }) => {
  const { translate, language } = useLanguage();
  const [activeScreen, setActiveScreen] = useState(null);
  const closeButton = useRef(null);

  const video = project.videos[language] ?? project.videos.en;
  const poster = project.posters[language] ?? project.posters.en;
  const value = project.value[language] ?? project.value.en;
  const description = project.description[language] ?? project.description.en;
  const report = project.report && (project.report[language] ?? project.report.en);
  const liveUrl = project.liveUrl && (project.liveUrl[language] ?? project.liveUrl.en);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (activeScreen !== null) setActiveScreen(null);
      else onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeScreen, onClose]);

  const stepScreen = (offset) =>
    setActiveScreen((index) => (index + offset + project.screens.length) % project.screens.length);

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="project-modal-backdrop" onClick={onClose} />
      <div className="project-modal-panel">
        <header className="project-modal-header">
          <div>
            <h3 id="project-modal-title">{project.title}</h3>
            <p>{description}</p>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="project-live-link">
                {translate("PROJECT.LIVE")} ↗
              </a>
            )}
          </div>
          <button ref={closeButton} type="button" className="project-modal-close" onClick={onClose} aria-label={translate("PROJECT.CLOSE")}>
            ×
          </button>
        </header>

        <section className="project-modal-section">
          <h4>{translate("PROJECT.VIDEO")}</h4>
          <video key={video} className="project-video" controls preload="metadata" poster={assetUrl(project, poster)}>
            <source src={assetUrl(project, video)} type="video/mp4" />
            {translate("PROJECT.VIDEO_FALLBACK")}
          </video>
          <div className="project-value">
            <h5>{value.title}</h5>
            {value.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        <section className="project-modal-section">
          <h4>{translate("PROJECT.SCREENSHOTS")}</h4>
          <div className="project-screens">
            {project.screens.map((screen, index) => (
              <button type="button" key={screen} className="project-screen" onClick={() => setActiveScreen(index)}>
                <img
                  src={assetUrl(project, screen)}
                  alt={`${project.title} — ${translate("PROJECT.SCREENSHOT")} ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>

        {report && (
          <section className="project-modal-section">
            <div className="project-report-header">
              <h4>{translate("PROJECT.REPORT")}</h4>
              <a href={assetUrl(project, report)} target="_blank" rel="noreferrer" className="project-report-link">
                {translate("PROJECT.OPEN_REPORT")}
              </a>
            </div>
            <iframe
              className="project-report"
              src={assetUrl(project, report)}
              title={`${project.title} — ${translate("PROJECT.REPORT")}`}
              loading="lazy"
            />
          </section>
        )}
      </div>

      {activeScreen !== null && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={project.title}>
          <button type="button" className="project-lightbox-close" onClick={() => setActiveScreen(null)} aria-label={translate("PROJECT.CLOSE")}>
            ×
          </button>
          <button type="button" className="project-lightbox-nav prev" onClick={() => stepScreen(-1)} aria-label={translate("PORTFOLIO.GALLERY.PREVIOUS")}>
            ‹
          </button>
          <img
            src={assetUrl(project, project.screens[activeScreen])}
            alt={`${project.title} — ${translate("PROJECT.SCREENSHOT")} ${activeScreen + 1}`}
          />
          <button type="button" className="project-lightbox-nav next" onClick={() => stepScreen(1)} aria-label={translate("PORTFOLIO.GALLERY.NEXT")}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
