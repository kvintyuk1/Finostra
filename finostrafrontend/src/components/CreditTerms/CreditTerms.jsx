import React, { useContext } from "react";
import styles from "./creditTerms.module.css";
import LineVerticalDotted from "../for card/ LineVerticalDotted/LineVerticalDotted";
import { LanguageContext } from "../LanguageContext";
import { creditTermsTranslations } from "./creditTermsTranslations";

function CreditTerms() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tCredit = creditTermsTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_rate_term_line}>
                <div className={styles.wrapper_rate_term}>
                    <div className={styles.wrapper_rate_line}>
                        <div className={styles.wrapper_rate}>
                            <div className={styles.text}>{tCredit.interestRate}</div>
                            <div className={styles.number}>{tCredit.interestRateValue}</div>
                        </div>
                        <LineVerticalDotted />
                    </div>
                    <div className={styles.wrapper_rate}>
                        <div className={styles.text}>{tCredit.maxTerm}</div>
                        <div className={styles.number}>{tCredit.maxTermValue}</div>
                    </div>
                </div>
                <LineVerticalDotted />
            </div>
            <div className={styles.wrapper_rate}>
                <div className={styles.text}>{tCredit.creditAmount}</div>
                <div className={styles.number}>{tCredit.creditAmountValue}</div>
            </div>
        </div>
    );
}

export default CreditTerms;
