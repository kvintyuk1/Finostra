import React from "react";
import styles from "./senderFee.module.css";

function SenderFee({fee}) {
    return (
        <div className={styles.container}>
             <div className={styles.title}>Комісія з відправника</div>
             <div className={styles.feeAmount}>{fee} UAH</div>
        </div>
    );
}

export default SenderFee;