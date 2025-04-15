import React from "react";
import styles from "./infoSumCredit.module.css";

function InfoSumCredit({name,info}) {
    return (
        <div className={styles.wrap_infoSumCredit}>
            <div className={styles.name}>{name}</div>
            <div className={styles.sumCredit}>
                <div className={styles.info}>{info}</div>
                <div className={styles.info}>UAH</div>
            </div>
        </div>
    );
}

export default InfoSumCredit;