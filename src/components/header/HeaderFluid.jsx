import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const HeaderFluid = () => {
  const { translate, language, setLanguage, languages } = useLanguage();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header
        className={
          navbar
            ? "main-header header-fluid fixed-header"
            : "main-header header-fluid"
        }
      >
        <nav className="container-fluid">
          <div className=" header-transparent">
            {/* Brand */}
            <Link to="/">
              <img
                className="navbar-logo"
                src={process.env.PUBLIC_URL + "/img/logo/logo.png"}
                alt={translate("NAV.LOGO_ALT")}
              />
            </Link>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link to="/" className="sidebar-logo">
                <img
                  src={process.env.PUBLIC_URL + "/img/logo/logo.png"}
                  alt={translate("NAV.LOGO_ALT")}
                />
              </Link>
              <Scrollspy
                className="anchor_nav navbar-nav ml-auto"
                items={["home", "about", "services", "work", "contact"]}
                currentClassName="current"
                offset={-71}
              >
                <li>
                  <a className="nav-link" href="#home" onClick={handleClick}>
                    <span>{translate("NAV.HOME")}</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about" onClick={handleClick}>
                    <span>{translate("NAV.ABOUT")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>{translate("NAV.SERVICES")}</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>{translate("NAV.PORTFOLIO")}</span>
                  </a>
                </li>
                {/* <li>
                  <a className="nav-link" href="#blog" onClick={handleClick}>
                    <span>Blog</span>
                  </a>
                </li> */}
                <li>
                  <a className="nav-link" href="#contact" onClick={handleClick}>
                    <span>{translate("NAV.CONTACT")}</span>
                  </a>
                </li>
              </Scrollspy>
              <div className="language-switch" role="group" aria-label={translate("NAV.LANGUAGE")}>
                {languages.map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={code === language ? "active" : ""}
                    aria-pressed={code === language}
                    onClick={() => setLanguage(code)}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                className=" sidebar-bottom-closer dark-bg"
                type="button"
                onClick={handleClick}
              >
                {translate("NAV.CLOSE_SIDEBAR")}
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderFluid;
