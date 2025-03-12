import React, { useContext } from "react";
import styles from "./banner.module.css";
import { LanguageContext } from "../LanguageContext";
import { bannerTranslations } from "./bannerTranslations";

function Banner({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title } =
    bannerTranslations[selectedLanguage] || bannerTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <img className={styles.wrapper_img} src="./img/flower.png" alt=" " />
        </div>
        <img className={styles.wrapper_laptop} src="./img/laptop.png" alt=" " />
      </div>
    </div>
  );
}

export default Banner;
