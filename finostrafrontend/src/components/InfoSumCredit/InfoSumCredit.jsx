import React from "react";
import styles from "./infoSumCredit.module.css";

function InfoSumCredit({name,value,setValue}) {
    return (
        <div className={styles.wrap_infoSumCredit}>
            <div className={styles.name}>{name}</div>
            <div className={styles.sumCredit}>
                <input type="number"
                       value={value}
                       onChange={(e)=>setValue(Number(e.target.value))}
                       className={styles.info} placeholder="000 000"/>
                <div className={styles.info}>UAH</div>
            </div>
        </div>
    );
}

export default InfoSumCredit;