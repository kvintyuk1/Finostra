import React, {useContext} from "react";
import styles from "./creditTerms.module.css";
import LineVerticalDotted from "../for card/ LineVerticalDotted/LineVerticalDotted";
import {LanguageContext} from "../LanguageContext";
import {creditTermsTranslations} from "./creditTermsTranslations";

function CreditTerms({
                         rate,
                         ratePercent,
                         term,
                         termCredit,
                         sumCredit,
                         numberCredit,
                         new_wrapper_rate_line="wrapper_rate_line8_9",
                         new_wrapper_rate_term="wrapper_rate_term21_53",
                         hideLineVerticalDotted = false,
                         hideLineVerticalDotted2 = false,
                         hideWrapperRateLine = true,
                         prepayment,
                         prepaymentPercent,
                         widthWrapRate = "widthRate124",
                         widthWrapRateTermLine = "widthWrapRateTermLine330",
                         widthContainerCreditTerms = "widthContainerCreditTerms375"
                     }) {
    const {selectedLanguage} = useContext(LanguageContext);
    const tCredit = creditTermsTranslations[selectedLanguage];

    
    const rateLabel = rate ?? tCredit.interestRate;
    const rateValue = ratePercent ?? tCredit.interestRateValue;
    const termLabel = term ?? tCredit.maxTerm;
    const termValue = termCredit ?? tCredit.maxTermValue;
    const sumLabel = sumCredit ?? tCredit.creditAmount;
    const sumValue = numberCredit ?? tCredit.creditAmountValue;

    return (
        <div className={`${styles.container} ${styles[widthContainerCreditTerms]}`}>
            <div className={`${styles.wrapper_rate_term_line} ${styles[widthWrapRateTermLine]}`}>
                <div className={`${styles.wrapper_rate_term} ${styles[new_wrapper_rate_term]}`}>
                   
                    <div className={`${styles.wrapper_rate_line} ${styles[new_wrapper_rate_line]}`}>
                        <div className={`${styles.wrapper_rate} ${styles[widthWrapRate]}`}>
                            <div className={styles.text}>{rateLabel}</div>
                            <div className={styles.number}>{rateValue}</div>
                        </div>
                        <LineVerticalDotted/>
                    </div>

                   
                    <div className={`${styles.wrapper_rate} ${styles[widthWrapRate]}`}>
                        <div className={styles.text}>{termLabel}</div>
                        <div className={styles.number}>{termValue}</div>
                    </div>

                   
                    {!hideLineVerticalDotted2 && <LineVerticalDotted/>}
                </div>
                <div className={styles.wrapper_rate}>
                    <div className={styles.text}>{sumLabel}</div>
                    <div className={styles.number}>{sumValue}</div>
                </div>

            
                {!hideLineVerticalDotted && <LineVerticalDotted/>}
            </div>
            {!hideWrapperRateLine && (
                <div className={styles.wrapper_rate_line}>
                    <div className={`${styles.wrapper_rate} ${styles[widthWrapRate]}`}>
                        <div className={styles.text}>{prepayment}</div>
                        <div className={styles.number}>{prepaymentPercent}</div>
                    </div>
                    <LineVerticalDotted/>
                </div>
            )}
        </div>
    );
}

export default CreditTerms;
