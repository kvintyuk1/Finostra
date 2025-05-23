import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { LanguageContext } from "../LanguageContext";
import SignInModal from "../login/SignInModal";
import { translations } from "./translations";
import axiosInstance from "../../utils/axiosInstance";
import ProfileMenu from "../userProfile/ProfileMenu";
import {
  fetchMonobankCurrencies,
  RateLimitError,
} from "../services/monobankService";

const INITIAL_INTERVAL = 5 * 60 * 1000;
const MAX_BACKOFF = 60 * 60 * 1000;

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => (
  <button className={styles.themeToggle} onClick={toggleTheme}>
    <div className={`${styles.sunIcon} ${isDarkMode ? "hidden" : ""}`} />
    <div className={`${styles.moonIcon} ${isDarkMode ? "" : "hidden"}`} />
  </button>
);

export default function Header({ isDarkMode, toggleTheme }) {
  const navigate = useNavigate();
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [rate, setRate] = useState({ buy: null, sell: null });
  const [loadingRate, setLoadingRate] = useState(true);
  const [rateError, setRateError] = useState(null);

  const timeoutRef = useRef(null);
  const backoffRef = useRef(INITIAL_INTERVAL);

  const scheduleNext = (delay) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(fetchRate, delay);
  };

  const fetchRate = async () => {
    try {
      const data = await fetchMonobankCurrencies();
      const usd = data.find(
        (i) => i.currencyCodeA === 840 && i.currencyCodeB === 980
      );
      if (!usd) throw new Error("USD→UAH not found");

      setRate({ buy: usd.rateBuy, sell: usd.rateSell });
      setRateError(null);

      backoffRef.current = INITIAL_INTERVAL;
      scheduleNext(INITIAL_INTERVAL);
    } catch (err) {
      if (err instanceof RateLimitError) {
        setRateError("Rate limit exceeded, retrying later");
      } else {
        console.error(err);
        setRateError(err.message);
      }
      scheduleNext(backoffRef.current);
      backoffRef.current = Math.min(backoffRef.current * 2, MAX_BACKOFF);
    } finally {
      setLoadingRate(false);
    }
  };

  const loadProfile = () => {
    axiosInstance
      .get("/api/v1/user/verification/me", { withCredentials: true })
      .then(({ data }) => {
        const user = data.user || data;
        setIsLoggedIn(true);
        setAvatarUrl(user.avatarUrl || "/default-avatar.png");
      })
      .catch(() => {
        setIsLoggedIn(false);
        setAvatarUrl(null);
      });
  };

  useEffect(() => {
    loadProfile();
    fetchRate();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleSignInClick = () => setShowSignIn(true);
  const handleCloseModal = () => {
    setShowSignIn(false);
    loadProfile();
  };

  const langTrans = translations[selectedLanguage];

  return (
    <div
      className={`${styles.App} ${
        isDarkMode ? styles.dark_mode : styles.light_mode
      }`}
    >
      <header className={styles.header}>
        <div className={styles.frame757}>
          <div
            className={styles.Frame614}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.Rectangle2} />
            <div className={styles.Logo}>Finostra</div>
          </div>

          <div>
            <div
              className={`${styles.searchBar} ${
                isDarkMode ? "dark-theme" : "light-theme"
              }`}
            >
              <input
                type="text"
                placeholder={langTrans.searchPlaceholder}
                className={styles.search_input}
              />
              <div className={styles.search_icon} />
            </div>
            <ThemeToggleButton
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
          </div>

          <div className={styles.Frame756}>
            <div className={styles.Frame755}>
              <div className={styles.Frame751}>
                <div className={styles.Frame708}>
                  <span>$</span>
                  {loadingRate || rate.buy == null ? (
                    <span>Loading...</span>
                  ) : rateError ? (
                    <span>{rateError}</span>
                  ) : (
                    <span>
                      {rate.buy} / {rate.sell}
                    </span>
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

            {isLoggedIn ? (
              <ProfileMenu avatarUrl={avatarUrl} />
            ) : (
              <div className={styles.Frame636} onClick={handleSignInClick}>
                <div className={styles.icon_user} />
                <span>{langTrans.signIn}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {showSignIn && !isLoggedIn && <SignInModal onClose={handleCloseModal} />}
    </div>
  );
}
