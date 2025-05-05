import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";      
import styles from "./creditProducts.module.css";
import { LanguageContext } from "../LanguageContext";
import { creditItemsTranslations } from "./creditItemsTranslations";

function CreditProducts({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();                    

  const creditItems =
    creditItemsTranslations[selectedLanguage] ||
    creditItemsTranslations.UA;

  const rows = creditItems.reduce((acc, item, idx) => {
    if (idx % 2 === 0) acc.push([item]);
    else acc[acc.length - 1].push(item);
    return acc;
  }, []);

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
          {rows.map((pair, rowIndex) => (
            <div className={styles.wrapper_content} key={rowIndex}>
              {pair.map(({ icon, title, text, color, path }) => (
                <div
                  key={title}
                  className={`${styles.item} ${color}`}
                  style={{ cursor: "pointer" }}      
                  onClick={() => navigate(path)}   
                >
                  <img src={`./icons/${icon}`} alt={title} />
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
