import React, { useContext } from "react";
import styles from "./payment.module.css";
import { LanguageContext } from "../LanguageContext";
import { paymentTranslations } from "./paymentTranslations";

function Payment({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, placeholder, text } =
    paymentTranslations[selectedLanguage] || paymentTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src={
              isDarkMode ? "./icons/payment.svg" : "./icons/payment_black.svg"
            }
            alt=""
          />
          <span>{title}</span>
        </div>
        <div className={styles.wrapper_contentCard}>
          <div className={styles.contentCard}>
            <div className={styles.numberCard}>
              <input
                type="number"
                className={styles.account}
                placeholder={placeholder}
              />
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
          <hr className={styles.hr} />
          <div className={styles.text}>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
