// Converter.jsx
import React, { useContext, useState, useEffect } from "react";
import styles from "./converter.module.css";
import { LanguageContext } from "../LanguageContext";
import { converterTranslations } from "./converterTranslations";
import { fetchMonobankCurrencies, RateLimitError } from "../services/monobankService";

const CACHE_TTL = 5 * 60 * 1000; // 5 хвилин
const RATE_KEY = "monobankRate";
const TIME_KEY = "monobankRateTimestamp";

function Converter({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, converterItems } =
    converterTranslations[selectedLanguage] || converterTranslations.UA;

  const [uah, setUah] = useState("");
  const [usd, setUsd] = useState("");
  const [rate, setRate] = useState(41.46);
  const [error, setError] = useState(null);
  const [reversed, setReversed] = useState(false);

  // Завантажити курс із API Monobank і зберегти в localStorage
  async function loadRate() {
    try {
      const data = await fetchMonobankCurrencies();
      const usdEntry = data.find(
        (i) => i.currencyCodeA === 840 && i.currencyCodeB === 980
      );
      if (!usdEntry) throw new Error("USD→UAH not found");

      const newRate =
        usdEntry.rateCross || (usdEntry.rateBuy + usdEntry.rateSell) / 2;
      setRate(newRate);
      setError(null);

      // Зберігаємо в localStorage
      localStorage.setItem(RATE_KEY, newRate.toString());
      localStorage.setItem(TIME_KEY, Date.now().toString());
    } catch (e) {
      if (e instanceof RateLimitError) {
        setError("Забагато запитів, спробуємо пізніше…");
      } else {
        console.error(e);
        setError("Не вдалося отримати курс");
      }
    }
  }

  // При монтуванні перевіряємо локальний кеш або завантажуємо новий курс
  useEffect(() => {
    const storedRate = localStorage.getItem(RATE_KEY);
    const storedTime = localStorage.getItem(TIME_KEY);

    if (
      storedRate &&
      storedTime &&
      Date.now() - parseInt(storedTime, 10) < CACHE_TTL
    ) {
      setRate(parseFloat(storedRate));
    } else {
      loadRate();
    }
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

  const handleSwitch = () => setReversed((p) => !p);

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
                      value={item.currency === "UAH" ? uah : usd}
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

        {error && <div className={styles.error}>{error}</div>}

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