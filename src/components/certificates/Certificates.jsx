import React from "react";
import { certificates } from "../../data/certificates";
import { useLanguage } from "../../i18n/LanguageContext";

const Certificates = () => {
  const { translate, formatMonth } = useLanguage();

  return (
    <>
      <div className="sm-title">
        <h4 className="font-alt">{translate("CERTIFICATES.TITLE")}</h4>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className={certificate.wide ? "certificate-badge certificate-badge-wide" : "certificate-badge"}>
              <img
                src={certificate.badge}
                alt={`${certificate.title} ${translate("CERTIFICATES.BADGE_ALT")}`}
                className="certificate-image"
              />
            </div>
            <div className="certificate-info">
              <h6>{certificate.title}</h6>
              <p>
                {certificate.issuer} · {formatMonth(certificate.issued)}
              </p>
              <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="certificate-link">
                {translate("CERTIFICATES.VERIFY")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
