import React from "react";
import styles from "./afterPayingTaxes.module.css";

function AfterPayingTaxes() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Після сплати податку</div>
            <div className={styles.wrap_percent}>
                <div className={styles.wrap_item}>
                    <div className={styles.name}>Проценти (дохід)</div>
                    <div className={styles.sum}>10.06 UAH</div>
                </div>
                <div className={styles.wrap_item}>
                    <div className={styles.name}>Процентна ставка</div>
                    <div className={styles.sum}>2.05 % на рік</div>
                </div>
            </div>
        </div>
    );
}

export default AfterPayingTaxes;