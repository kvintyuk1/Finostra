import React, { useContext } from "react";
import styles from "./mobileRecharge.module.css";
import { LanguageContext } from "../LanguageContext";
import { mobileRechargeTranslations } from "./mobileRechargeTranslations";

function MobileRecharge({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const {
    title,
    placeholderCountry,
    placeholderMobile,
    text,
  } =
    mobileRechargeTranslations[selectedLanguage] ||
    mobileRechargeTranslations.UA;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="./icons/mobileRecharge.svg" alt="" />
          <span>{title}</span>
        </div>
        <div className={styles.wrapper_contentCard}>
          <div className={styles.contentCard}>
            <div className={styles.wrapper_countryNumber}>
              <img src="./icons/flag-ukraine.svg" alt="" />
              <div className={styles.countryNumber}>
                <div className={styles.numberCard}>
                  <input
                    type="text"
                    className={styles.country_number}
                    placeholder={placeholderCountry}
                  />
                </div>
                <img src="./icons/arrow-down.svg" alt="" />
              </div>
              <div>
                <input
                  type="number"
                  className={styles.number_mobile}
                  placeholder={placeholderMobile}
                />
              </div>
            </div>

            <img src="./icons/arrow-out.svg" alt="" />
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

export default MobileRecharge;
