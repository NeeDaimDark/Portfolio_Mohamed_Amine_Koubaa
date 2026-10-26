import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import useDocumentTitle from "../components/useDocumentTitle";
import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const { translate } = useLanguage();
  useDocumentTitle(translate("DOCUMENT.NOT_FOUND_TITLE"));

  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">{translate("NOT_FOUND.HEADING")}</h1>
                <p className="h4">{translate("NOT_FOUND.TEXT")}</p>
                <div className="m-30px-tb">
                  <img src={process.env.PUBLIC_URL + "/img/404-page.svg"} alt={translate("NOT_FOUND.IMAGE_ALT")} />
                </div>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-theme" to="/">
                    {translate("NOT_FOUND.BACK")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default NotFound;
