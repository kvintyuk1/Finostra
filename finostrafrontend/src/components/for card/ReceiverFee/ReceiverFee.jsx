import React from "react";
import styles from "./receiverFee.module.css";

function ReceiverFee({fee}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Комісія з одержувача</div>
            <div className={styles.feeAmount}>{fee} UAH</div>
        </div>
    );
}

export default ReceiverFee;