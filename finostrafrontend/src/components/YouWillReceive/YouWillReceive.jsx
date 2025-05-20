import React from "react";
import styles from "./youWillReceive.module.css";

function YouWillReceive() {
    return (
        <div className={styles.container}>
            <div className={styles.you_receive}>
                <div className={styles.title}>Ви отримаєте</div>
                <div className={styles.sum}>2 510.06 UAH</div>
            </div>
            <div className={styles.wrap_average_income}>
                <div className={styles.average_income}>Середній щомісячний дохід</div>
                <div className={styles.number}>3.35 UAH</div>
            </div>
            <div className={styles.wrap_after_taxes}>
                <input type="checkbox"/>
                <div className={styles.after_taxes}>Після сплати податку</div>
            </div>
        </div>
    );
}

export default YouWillReceive;