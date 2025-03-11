import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod({title_period,validityPeriod}) {
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>{title_period}</div>
            <div className={styles.info}>
                <div className={styles.validityPeriod}>{validityPeriod}</div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default ValidityPeriod;