import React, { useContext } from "react";
import styles from "./news.module.css";
import { LanguageContext } from "../LanguageContext";
import { newsItemsTranslations, newsHeadingTranslations } from "./newsTranslations";

function News({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const newsItems = newsItemsTranslations[selectedLanguage] || newsItemsTranslations.UA;
  const heading = newsHeadingTranslations[selectedLanguage] || newsHeadingTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_info}>
          <div className={styles.wrapper_title}>
            <div className={styles.title}>
              <span className={styles.text}>{heading}</span>
              <img
                src={
                  isDarkMode
                    ? "./icons/arrow-out-big.svg"
                    : "./icons/arrow-out-big-white.svg"
                }
                alt=" "
              />
            </div>
            <hr className={styles.hr} />
          </div>
          {newsItems.map(({ img, title, color, hasArrow, iconDark, iconLight }, index) => (
            <div className={styles.wrapper_item} key={index}>
              <div className={styles.item}>
                <img src={`./img/${img}`} alt=" " />
                <div className={styles.title}>{title}</div>
              </div>
              <div className={`${styles.out} ${color}`}>
                {hasArrow ? (
                  <img src="./icons/arrow-out.svg" alt=" " />
                ) : (
                  <img
                    src={isDarkMode ? `./icons/${iconDark}` : `./icons/${iconLight}`}
                    alt=" "
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
