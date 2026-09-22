import { createContext, useContext, useEffect, useState } from "react";
import { ui } from "../data/content";

const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") return saved;
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("es") || nav.startsWith("ca") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: ui[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext);
}
