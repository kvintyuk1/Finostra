import React, { useContext } from "react";
import styles from "./myCredits.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import CurrentContracts from "../../../components/CurrentContracts/CurrentContracts";
import { LanguageContext } from "../../../components/LanguageContext";
import { myCreditsTranslations } from "./myCreditsTranslations";

function MyCredits({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = myCreditsTranslations[selectedLanguage];

  return (
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      <div className={styles.container}>
        <div className={styles.wrapper_myCredits}>
          <TransferToCardInfo
            img="moneybag_white32"
            title={t.title}
            subtitle={t.subtitle}
          />
          <CurrentContracts />
        </div>
      </div>
    </div>
  );
}

export default MyCredits;
