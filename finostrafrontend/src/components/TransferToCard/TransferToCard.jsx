import React, { useContext } from "react";
import styles from "./transferToCard.module.css";
import { LanguageContext } from "../LanguageContext";
import { transferToCardTranslations } from "./transferToCardTranslations";

function TransferToCard({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, placeholder, text } =
    transferToCardTranslations[selectedLanguage] || transferToCardTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="./icons/transfer_black.svg" alt="" />
          <span>{title}</span>
        </div>
        <div className={styles.wrapper_contentCard}>
          <div className={styles.contentCard}>
            <div className={styles.numberCard}>
              <input
                type="number"
                className={styles.style_input}
                placeholder={placeholder}
              />
            </div>
            <div className={styles.wrapper_img}>
              <img src="./icons/cardLinear.svg" alt="" />
              <img src="./icons/arrow-out.svg" alt="" />
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.text}>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferToCard;
