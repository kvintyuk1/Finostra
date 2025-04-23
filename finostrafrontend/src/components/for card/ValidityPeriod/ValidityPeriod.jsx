import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod({title_period,value,onChange,periodValid,nextRef}) {
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>{title_period}</div>
            <div className={styles.info}>
                <input className={`${styles.validityPeriod} ${periodValid ? "" : styles.invalid}`}
                       placeholder="MM/YY"
                       value={value}
                       onChange={onChange}
                />
                {!periodValid && <div className={styles.error}>Не вірний період</div>}
            </div>
        </div>
    );
}

export default ValidityPeriod;