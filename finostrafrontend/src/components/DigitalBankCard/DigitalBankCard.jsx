import React, { useContext } from "react";
import styles from "./digitalBankCard.module.css";
import { LanguageContext } from "../LanguageContext";
import { digitalBankCardTranslations } from "./digitalBankCardTranslations";

function DigitalBankCard({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, list, button } =
    digitalBankCardTranslations[selectedLanguage] || digitalBankCardTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>
            <img src="./img/finostra_card.jpg" alt=""/>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.button}>
            <button>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalBankCard;
