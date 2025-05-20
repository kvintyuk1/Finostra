import React from "react";
import styles from "./depositRate.module.css";
import FilterRate from "../FilterRate/FilterRate";

function DepositRate() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_title}>
                <div className={styles.title}>Ставка (на рік) / Строк (міс.)</div>
                <div className={styles.wrap_percent}>
                    <div className={styles.number}>99</div>
                    <div className={styles.percent}>%</div>
                </div>
            </div>
            <FilterRate/>
        </div>
    );
}

export default DepositRate;