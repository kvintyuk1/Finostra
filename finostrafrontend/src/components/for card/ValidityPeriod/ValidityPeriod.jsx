import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod({title_period,value,onChange}) {
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>{title_period}</div>
            <div className={styles.info}>
                <input className={styles.validityPeriod}
                       placeholder="01/25"
                       value={value} onChange={onChange}/>

            </div>
        </div>
    );
}

export default ValidityPeriod;