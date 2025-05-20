import React from "react";
import styles from "./deposit.module.css";

function Deposit() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.title}>Вклад</div>
                <div className={styles.term}>Термін</div>
                <div className={styles.wrap_rate}>
                    <div className={styles.rate}>Ставка</div>
                    <div className={styles.options}>Виберіть не більше 4 варіантів</div>
                </div>
            </div>
        </div>
    );
}

export default Deposit;