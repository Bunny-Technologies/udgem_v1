import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "te";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, te: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "te",
  setLanguage: () => {},
  t: (en, te) => te,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("te");
  
  const t = (en: string, te: string) => language === "en" ? en : te;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export type { Language };
