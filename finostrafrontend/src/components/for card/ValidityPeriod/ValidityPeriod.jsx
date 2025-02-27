import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod() {
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>Термін дії</div>
            <div className={styles.info}>
                <div className={styles.validityPeriod}>01 / 25</div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default ValidityPeriod;