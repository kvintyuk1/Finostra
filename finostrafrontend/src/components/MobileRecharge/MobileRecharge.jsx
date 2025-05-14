import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./mobileRecharge.module.css";
import { LanguageContext } from "../LanguageContext";
import { mobileRechargeTranslations } from "./mobileRechargeTranslations";

function MobileRecharge({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const { title, placeholderCountry, placeholderMobile, text } =
    mobileRechargeTranslations[selectedLanguage] ||
    mobileRechargeTranslations.UA;

  // Handle submission: navigate to the mobileRecharge path with phone data
  const handleSubmit = () => {
    if (!mobileNumber) return; // optionally validate further
    navigate("/connection/mobileRecharge", {
      state: { countryCode, mobileNumber },
    });
  };

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
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  />
                </div>
                <img src="./icons/arrow-down.svg" alt="" />
              </div>
              <div>
                <input
                  type="number"
                  className={styles.number_mobile}
                  placeholder={placeholderMobile}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Clicking this arrow triggers navigation */}
            <img
              src="./icons/arrow-out.svg"
              alt="Submit"
              className={styles.submit_icon}
              onClick={handleSubmit}
              style={{ cursor: 'pointer' }}
            />
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
