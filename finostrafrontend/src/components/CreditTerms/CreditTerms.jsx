import React from "react";
import styles from "./creditTerms.module.css";
import LineVerticalDotted from "../for card/ LineVerticalDotted/LineVerticalDotted";

function CreditTerms({
                         rate, ratePercent, term, termCredit, sumCredit, numberCredit, hideLineVerticalDotted,
                         hideLineVerticalDotted2,hideWrapperRateLine = true, prepayment, prepaymentPercent, widthWrapRate = "widthRate124",
                         widthWrapRateTermLine = "widthWrapRateTermLine330",
                         widthContainerCreditTerms = "widthContainerCreditTerms375"
                     }) {
    return (
        <div className={`${styles.container} ${styles[widthContainerCreditTerms]}`}>
            <div className={`${styles.wrapper_rate_term_line} ${styles[widthWrapRateTermLine]}`}>
                <div className={styles.wrapper_rate_term}>
                    <div className={styles.wrapper_rate_line}>
                        <div className={`${styles.wrapper_rate} ${styles[widthWrapRate]}`}>
                            <div className={styles.text}>{rate}</div>
                            <div className={styles.number}>{ratePercent}</div>
                        </div>
                        <LineVerticalDotted/>
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

                    <div className={`${styles.wrapper_rate} ${styles[widthWrapRate]}`}>
                        <div className={styles.text}>{term}</div>
                        <div className={styles.number}>{termCredit}</div>
                    </div>
                    {!hideLineVerticalDotted2 && <LineVerticalDotted/>}
                </div>
                {!hideLineVerticalDotted && <LineVerticalDotted/>}
            </div>
            <div className={styles.wrapper_rate}>
                <div className={styles.text}>{sumCredit}</div>
                <div className={styles.number}>{numberCredit}</div>
            </div>
        </div>
    );
}

export default CreditTerms;