import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import { LanguageContext } from "../LanguageContext";
import SignInModal from "../login/SignInModal";

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => (
  <button className={styles.themeToggle} onClick={toggleTheme}>
    <div className={`${styles.sunIcon} ${isDarkMode ? "hidden" : ""}`}></div>
    <div className={`${styles.moonIcon} ${isDarkMode ? "" : "hidden"}`}></div>
  </button>
);

function Header({ isDarkMode, toggleTheme }) {
  const { tHeader, selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  const [showSignIn, setShowSignIn] = useState(false);

  const [rate, setRate] = useState({ buy: null, sell: null, timestamp: 0 });
  const [loadingRate, setLoadingRate] = useState(true);
  const [rateError, setRateError] = useState(null);
  const intervalRef = useRef(null);

  const fetchRate = async () => {
    try {
      const response = await fetch("https://api.monobank.ua/bank/currency");
      if (response.status === 429) {
        throw new Error("Rate limit exceeded");
      }
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      const usd = data.find(
        (item) => item.currencyCodeA === 840 && item.currencyCodeB === 980
      );
      if (usd) {
        const newRate = { buy: usd.rateBuy, sell: usd.rateSell, timestamp: Date.now() };
        setRate(newRate);
        localStorage.setItem("usdRate", JSON.stringify(newRate));
        setRateError(null);
      } else {
        throw new Error("USD→UAH rate not found");
      }
    } catch (err) {
      console.error("Error fetching Monobank rate:", err);
      setRateError(err.message);
    } finally {
      setLoadingRate(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("usdRate");
    if (cached) {
      const parsed = JSON.parse(cached);
      setRate(parsed);
      const age = Date.now() - parsed.timestamp;
      if (age < 5 * 60 * 1000) {
        setLoadingRate(false);
      } else {
        
        fetchRate();
      }
    } else {
      fetchRate();
    }

    
    intervalRef.current = setInterval(fetchRate, 5 * 60 * 1000);

    
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSignInClick = () => setShowSignIn(true);
  const handleCloseModal = () => setShowSignIn(false);

  return (
    <div className={`${styles.App} ${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
      <header className={styles.header}>
        <div className={styles.frame757}>
          <div className={styles.Frame614}>
            <div className={styles.Rectangle2}></div>
            <div className={styles.Logo}>Finostra</div>
          </div>
          <div>
            <div className={`${styles.searchBar} ${isDarkMode ? "dark-theme" : "light-theme"}`}>
              <input
                type="text"
                placeholder={tHeader.searchPlaceholder}
                className={styles.search_input}
              />
              <div className={styles.search_icon}></div>
            </div>
            <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
          <div className={styles.Frame756}>
            <div className={styles.Frame755}>
              <div className={styles.Frame751}>
                <div className={styles.Frame708}>
                  <span>$</span>
                  {loadingRate && !rate.buy ? (
                    <span>Loading...</span>
                  ) : rateError ? (
                    <span>{rateError}</span>
                  ) : (
                    <span>{rate.buy} / {rate.sell}</span>
                  )}
                </div>
              </div>
              <div className={styles.Frame753}>
                <div className={styles.Frame744}>
                  <select
                    className={styles.language_select}
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    <option value="UA">UA</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.Frame636}>
              <div className={styles.Frame612} onClick={handleSignInClick}>
                <div className={styles.icon_user}></div>
                <span>{tHeader.signIn}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showSignIn && <SignInModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Header;
