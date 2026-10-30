import React from "react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageContext";

const Contact = () => {
  const { translate } = useLanguage();

  return (
    <div className="row align-items-center">
      <div className="col-lg-6 my-3">
        <div className="contct-form">
          <div className="sm-title">
            <h4 className="font-alt">{translate("CONTACT.TITLE")}</h4>
          </div>
          <div className="btn-bar mt-4">
            <a className="px-btn px-btn-theme btn-md" href={`mailto:${profile.email}`}>
              {translate("CONTACT.SEND")}
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 ml-auto my-3">
        <div className="contact-info">
          <div className="sm-title">
            <h4 className="font-alt">{translate("CONTACT.GET_IN_TOUCH")}</h4>
            <p>{translate("CONTACT.PITCH")}</p>
          </div>
          <div className="media">
            <div className="icon">
              <i className="ti-email"></i>
            </div>
            <span className="media-body">{profile.email}</span>
          </div>
          <div className="media">
            <div className="icon">
              <i className="ti-mobile"></i>
            </div>
            <span className="media-body">
              {translate("CONTACT.MOBILE")}: <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
