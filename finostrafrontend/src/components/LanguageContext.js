import React, { createContext, useState } from "react";
import { translations } from "./header/translations"; 
import { footerTranslations } from "./Footer/footerTranslations"; 
import { sidebarTranslations } from "./sidebar/sidebarTranslations"; 

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("UA");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const tHeader = translations[selectedLanguage];
  const tFooter = footerTranslations[selectedLanguage];
  const tSidebar = sidebarTranslations[selectedLanguage];

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        handleLanguageChange,
        tHeader,
        tFooter,
        tSidebar,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
