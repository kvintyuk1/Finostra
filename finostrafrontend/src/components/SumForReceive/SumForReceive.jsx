import React, { useContext } from "react";
import styles from "./sumForReceive.module.css";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import { LanguageContext } from "../LanguageContext";
import { sumForReceiveTranslations } from "./sumForReceiveTranslations";

function SumForReceive({ sum, setSum }) {
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  const t = sumForReceiveTranslations[selectedLanguage];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_info}>
        <Total_Sum
          title_totalSum={t.sumTitle}
          value={sum}
          onChange={(e) => setSum(e.target.value)}
          fontWeight="bold"
        />
        <div className={styles.wrap_languages}>
          <select
            className={styles.language_select}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="UA">{sumForReceiveTranslations.UA.currency}</option>
            <option value="EN">{sumForReceiveTranslations.EN.currency}</option>
          </select>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
}

export default SumForReceive;
