import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "../assets/i18n/en.json";
import fr from "../assets/i18n/fr.json";

const TRANSLATIONS = { en, fr };
const LANGUAGES = Object.keys(TRANSLATIONS);
const FALLBACK_LANGUAGE = "en";
const STORAGE_KEY = "portfolio-language";

const readStoredLanguage = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const detectLanguage = () => {
  const stored = readStoredLanguage();
  if (LANGUAGES.includes(stored)) return stored;
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browser) ? browser : FALLBACK_LANGUAGE;
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // storage blocked (private mode): the choice only lasts for this visit
    }
  }, [language]);

  const translate = useCallback(
    (key) => TRANSLATIONS[language][key] ?? TRANSLATIONS[FALLBACK_LANGUAGE][key] ?? key,
    [language]
  );

  const formatMonth = useCallback(
    (isoMonth) =>
      new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(`${isoMonth}-01T00:00:00`)),
    [language]
  );

  const value = useMemo(
    () => ({ language, languages: LANGUAGES, setLanguage, translate, formatMonth }),
    [language, translate, formatMonth]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
