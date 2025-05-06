import React, { useContext, useState, useEffect } from "react";
import styles from "./converter.module.css";
import { LanguageContext } from "../LanguageContext";
import { converterTranslations } from "./converterTranslations";

function Converter({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, equal, converterItems } =
    converterTranslations[selectedLanguage] || converterTranslations.UA;

  const [uah, setUah] = useState("");
  const [usd, setUsd] = useState("");
  const [rate, setRate] = useState(41.46);
  const [reversed, setReversed] = useState(false);

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch("https://api.monobank.ua/bank/currency");
        const data = await res.json();
        const usdRate = data.find(
          (item) => item.currencyCodeA === 840 && item.currencyCodeB === 980
        );
        if (usdRate) {
          const newRate =
            usdRate.rateCross || (usdRate.rateBuy + usdRate.rateSell) / 2;
          setRate(newRate);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchRate();
  }, []);

  const handleUahChange = (e) => {
    const val = e.target.value;
    setUah(val);
    if (!isNaN(parseFloat(val))) {
      setUsd((parseFloat(val) / rate).toFixed(2));
    } else {
      setUsd("");
    }
  };

  const handleUsdChange = (e) => {
    const val = e.target.value;
    setUsd(val);
    if (!isNaN(parseFloat(val))) {
      setUah((parseFloat(val) * rate).toFixed(2));
    } else {
      setUah("");
    }
  };

  const handleSwitch = () => {
    setReversed((prev) => !prev);
  };

  // Decide order for rendering
  const [first, second] = reversed
    ? [converterItems[1], converterItems[0]]
    : converterItems;

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_title}>
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.info}>
          <div className={styles.wrapper_content}>
            {[first, second].map((item) => (
              <div key={item.currency} className={styles.container_exchange}>
                <div className={styles.exchange}>
                  <div className={styles.wrapper_rate}>
                    <div className={styles.country}>
                      <img
                        src={`./icons/${item.icon}`}
                        alt={item.currency}
                      />
                      <div className={styles.currency}>{item.currency}</div>
                      <img
                        src={
                          isDarkMode
                            ? `./icons/${item.iconDark}`
                            : `./icons/${item.iconLight}`
                        }
                        alt="icon"
                      />
                      <img
                        src={
                          isDarkMode
                            ? "./icons/arrow-down.svg"
                            : "./icons/arrow-down-white.svg"
                        }
                        alt="arrow"
                      />
                    </div>
                    <hr className={`${styles.hr} ${styles.size}`} />
                    <div className={styles.balance}>
                      <span>{item.text}</span>
                      <span>{item.number}</span>
                      <img
                        src={
                          isDarkMode
                            ? `./icons/${item.iconDark}`
                            : `./icons/${item.iconLight}`
                        }
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className={styles.total}>
                    <input
                      type="number"
                      className={styles.input_total}
                      value={
                        item.currency === "UAH"
                          ? uah
                          : usd
                      }
                      onChange={
                        item.currency === "UAH"
                          ? handleUahChange
                          : handleUsdChange
                      }
                      placeholder={item.placeholder}
                    />
                    <hr className={`${styles.hr} ${styles.big_size}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.img_switch} onClick={handleSwitch}>
            <img
              src={
                isDarkMode
                  ? "./icons/switch.svg"
                  : "./icons/switch-white.svg"
              }
              alt="switch"
              style={{
                cursor: "pointer",
                transform: reversed ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease, opacity 0.2s",
                opacity: 0.8,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
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
