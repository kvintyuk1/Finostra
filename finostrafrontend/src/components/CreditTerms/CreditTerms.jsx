import React from "react";
import styles from "./creditTerms.module.css";
import LineVerticalDotted from "../for card/ LineVerticalDotted/LineVerticalDotted";

function CreditTerms() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_rate_term_line}>
                <div className={styles.wrapper_rate_term}>
                    <div className={styles.wrapper_rate_line}>
                        <div className={styles.wrapper_rate}>
                            <div className={styles.text}>Процентна ставка</div>
                            <div className={styles.number}>0.01% на місяць</div>
                        </div>
                        <LineVerticalDotted/>
                    </div>
                    <div className={styles.wrapper_rate}>
                        <div className={styles.text}>Максимальний строк</div>
                        <div className={styles.number}>До 24 міс.</div>
                    </div>
                </div>
                <LineVerticalDotted/>
            </div>
            <div className={styles.wrapper_rate}>
                <div className={styles.text}>Сума кредиту</div>
                <div className={styles.number}>Від 300 до 300 000 UAH</div>
            </div>
        </div>
    );
}

export default CreditTerms;