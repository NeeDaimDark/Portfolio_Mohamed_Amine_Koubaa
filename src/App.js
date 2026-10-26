import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes />
    </LanguageProvider>
  );
};

export default App;
