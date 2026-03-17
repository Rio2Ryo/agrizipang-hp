"use client";

import { createContext, useContext, useState } from "react";
import { Language, translations, T } from "../i18n/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ja",
  setLang: () => {},
  t: translations.ja,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ja");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as T }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
