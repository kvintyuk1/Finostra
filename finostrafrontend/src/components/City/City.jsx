import React, { useContext } from "react";
import styles from "./city.module.css";
import { LanguageContext } from "../LanguageContext"; 
import { cityTranslations } from "./cityTranslations"; 

function City() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = cityTranslations[selectedLanguage];

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t.title}</div>
      <select name="city" id="city" className={styles.wrap_select}>
        <option value="kyiv">{t.cities.kyiv}</option>
        <option value="lviv">{t.cities.lviv}</option>
        <option value="odesa">{t.cities.odesa}</option>
      </select>
    </div>
  );
}

export default City;
