import React, { useContext, useState } from "react";
import styles from "./converter.module.css";
import { LanguageContext } from "../LanguageContext";
import { converterTranslations } from "./converterTranslations";

function Converter({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const {
    title,
    exchangeRate,
    equal,
    unitLeft,
    converterItems,
  } = converterTranslations[selectedLanguage] || converterTranslations.UA;

  const [uah, setUah] = useState("");
  const [usd, setUsd] = useState("");
  const exchangeRateNumber = 41.46;

  const handleUahChange = (e) => {
    const value = e.target.value;
    setUah(value);
    setUsd((value / exchangeRateNumber).toFixed(2));
  };

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_title}>
          <div className={styles.title}>{title}</div>
          <div className={styles.wrapper_exchange}>
            <div className={styles.text}>{exchangeRate}</div>
            <img
              src={
                isDarkMode
                  ? "./icons/grivna.svg"
                  : "./icons/grivna-white.svg"
              }
              alt=""
            />
            <div className={styles.text}>{equal}</div>
            <div className={styles.text}>{unitLeft}</div>
            <img
              src={isDarkMode ? "./icons/dollar.svg" : "./icons/dollar-white.svg"}
              alt=""
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.wrapper_content}>
            {converterItems.map(
              ({
                icon,
                currency,
                iconDark,
                iconLight,
                placeholder,
                hasArrowDark,
                hasArrowLight,
                text,
                number,
              }) => (
                <div key={currency} className={styles.container_exchange}>
                  <div className={styles.exchange}>
                    <div className={styles.wrapper_rate}>
                      <div className={styles.country}>
                        <img src={`./icons/${icon}`} alt="" />
                        <div className={styles.currency}>{currency}</div>
                        <img
                          src={
                            isDarkMode
                              ? `./icons/${iconDark}`
                              : `./icons/${iconLight}`
                          }
                          alt=""
                        />
                        <img
                          src={
                            isDarkMode
                              ? "./icons/arrow-down.svg"
                              : "./icons/arrow-down-white.svg"
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <hr className={`${styles.hr} ${styles.size}`} />
                      </div>
                      <div className={styles.balance}>
                        <span>{text}</span>
                        <span>{number}</span>
                        <img
                          src={
                            isDarkMode
                              ? `./icons/${iconDark}`
                              : `./icons/${iconLight}`
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.total}>
                      <span>
                        <input
                          type="number"
                          className={styles.input_total}
                          value={currency === "UAH" ? uah : usd}
                          onChange={
                            currency === "UAH" ? handleUahChange : undefined
                          }
                          placeholder={placeholder}
                        />
                      </span>
                      <div>
                        <hr className={`${styles.hr} ${styles.big_size}`} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.exchange}></div>
                </div>
              )
            )}
          </div>
          <div className={styles.img_switch}>
            <img
              src={isDarkMode ? "./icons/switch.svg" : "./icons/switch-white.svg"}
              alt=""
            />
          </div>
        </div>
        {[7, 8, 9, 10, 11, 12].map((num) => (
          <img
            key={num}
            className={styles[`star${num}`]}
            src={`./icons/star ${num}.svg`}
            alt="star"
          />
        ))}
      </div>
    </div>
  );
}

export default Converter;
