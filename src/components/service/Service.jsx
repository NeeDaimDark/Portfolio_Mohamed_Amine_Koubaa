import React from "react";
import { services } from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";

const Service = () => {
  const { translate } = useLanguage();

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div className="feature-box-02" key={service.key}>
          <div className="icon">
            <i className={service.icon}></i>
          </div>
          <h6>
            <span>{String(index + 1).padStart(2, "0")}.</span> {translate(`SERVICES.${service.key}.NAME`)}
          </h6>
          <h5>{translate(`SERVICES.${service.key}.DESCRIPTION`)}</h5>
        </div>
      ))}
    </div>
  );
};

export default Service;
