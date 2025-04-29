import React, { useContext, useState, useEffect } from "react";
import styles from "./send.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../LanguageContext";
import { sendTranslations } from "./sendTranslations";

function Send({ setIsConfirmed, isSum, setIsSum, isCurrency, setIsCurrency, isCountry, setIsCountry }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = sendTranslations[selectedLanguage] || sendTranslations["UA"];

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ isSum: false, isCurrency: false, isCountry: false });

  const validateForm = () => {
    const newErrors = {};
    if (!isSum || isNaN(isSum) || Number(isSum) <= 0) {
      newErrors.isSum = t.errorInvalidAmount || "Введіть коректну суму більше 0";
    }
    if (!isCurrency) {
      newErrors.isCurrency = t.errorSelectCurrency || "Оберіть валюту";
    }
    if (!isCountry) {
      newErrors.isCountry = t.errorSelectCountry || "Оберіть країну";
    }
    return newErrors;
  };

  useEffect(() => {
    setErrors(validateForm());
  }, [isSum, isCurrency, isCountry]);

  const handleOpenTransferDetails = () => {
    setTouched({ isSum: true, isCurrency: true, isCountry: true });
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsConfirmed(true);
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_send}>
        <div className={styles.title}>{t.send}</div>
        <div className={styles.wrapper_info}>
          <div className={styles.wrap_item}>
            <div className={styles.title_item}>{t.transferAmount}</div>
            <input
              type="text"
              className={styles.send_input}
              placeholder={t.enterValue}
              value={isSum}
              onChange={(e) => setIsSum(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, isSum: true }))}
            />
            {touched.isSum && errors.isSum && (
              <div className={styles.error}>{errors.isSum}</div>
            )}
          </div>
          <div className={styles.wrap_item}>
            <div className={styles.title_item}>{t.transferCurrency}</div>
            <select
              className={styles.valuta_select}
              value={isCurrency}
              onChange={(e) => setIsCurrency(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, isCurrency: true }))}
            >
              <option value="">{t.select}</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="PLN">PLN</option>
            </select>
            {touched.isCurrency && errors.isCurrency && (
              <div className={styles.error}>{errors.isCurrency}</div>
            )}
          </div>
          <div className={styles.wrap_item}>
            <div className={styles.title_item}>{t.receivingCountry}</div>
            <select
              className={styles.country_select}
              value={isCountry}
              onChange={(e) => setIsCountry(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, isCountry: true }))}
            >
              <option value="">{t.select}</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="UK">UK</option>
              <option value="Poland">Poland</option>
            </select>
            {touched.isCountry && errors.isCountry && (
              <div className={styles.error}>{errors.isCountry}</div>
            )}
          </div>
        </div>
      </div>
      <ButtonForCard
        title_button={t.send}
        sizeButton="size_button186"
        isActive={isFormValid}
        onClick={handleOpenTransferDetails}
      />
    </div>
  );
}

export default Send;
