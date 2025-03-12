import React, { useContext } from "react";
import styles from "./creditProducts.module.css";
import { LanguageContext } from "../LanguageContext";
import { creditItemsTranslations } from "./creditItemsTranslations";

function CreditProducts({ isDarkMode }) {
  // Отримуємо вибрану мову з LanguageContext
  const { selectedLanguage } = useContext(LanguageContext);
  const creditItems =
    creditItemsTranslations[selectedLanguage] || creditItemsTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_title}>
          <div className={styles.title}>
            <img
              src={
                isDarkMode
                  ? "./icons/creditProducts.svg"
                  : "./icons/creditProducts-black.svg"
              }
              alt=""
            />
            <span>
              {selectedLanguage === "UA"
                ? "Кредитні Продукти"
                : "Credit Products"}
            </span>
          </div>
          <div className={styles.wrapper_img}>
            <img
              src={
                isDarkMode
                  ? "./icons/arrow-out-white.svg"
                  : "./icons/arrow-out.svg"
              }
              alt=""
            />
          </div>
        </div>

        <div className={styles.info}>
          {creditItems
            .reduce((acc, item, index) => {
              if (index % 2 === 0) {
                acc.push([item]);
              } else {
                acc[acc.length - 1].push(item);
              }
              return acc;
            }, [])
            .map((pair, index) => (
              <div className={styles.wrapper_content} key={index}>
                {pair.map(({ icon, title, text, color }) => (
                  <div className={`${styles.item} ${color}`} key={title}>
                    <img src={`./icons/${icon}`} alt="" />
                    <div className={styles.wrapper_text}>
                      <div>{title}</div>
                      <span className={styles.text}>{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CreditProducts;
