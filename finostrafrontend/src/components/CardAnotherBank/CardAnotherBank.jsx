import React, { useContext } from "react";
import styles from "./cardAnotherBank.module.css";
import { LanguageContext } from "../LanguageContext";
import { cardAnotherBankTranslations } from "./cardAnotherBankTranslations";

function CardAnotherBank({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, info, button } =
    cardAnotherBankTranslations[selectedLanguage] || cardAnotherBankTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.info_star}>
          <div className={styles.wrapper_info}>
            <div className={styles.title}>
              <span>{title}</span>
            </div>
            <div className={styles.info}>
              <img src="./img/anotherCard.jpg" alt=" " />
              <div>{info}</div>
            </div>
            <div className={styles.button}>
              <button>{button}</button>
            </div>
          </div>
          <div>
            <img src="./img/star 3.png" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAnotherBank;
