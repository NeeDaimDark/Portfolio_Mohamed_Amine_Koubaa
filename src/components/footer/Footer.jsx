import React from "react";
import { footerLinks } from "../../data/profile";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { translate } = useLanguage();

  return (
    <div className="row align-items-center">
      <div className="col-md-6 my-2">
        <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
          {footerLinks.map(({ name, icon: Icon, url }) => (
            <a key={name} href={url} rel="noreferrer" target="_blank" aria-label={name}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="col-md-6 my-2 text-center text-md-right">
        <p>{translate("FOOTER.BUILT_BY")}</p>
      </div>
    </div>
  );
};

export default Footer;
