"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { translations, getTranslations, type Locale, type Translations } from "./translations";

type LanguageContextType = {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en,
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "vi") {
      setLocale(saved);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "vi" : "en";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: getTranslations(locale), toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
