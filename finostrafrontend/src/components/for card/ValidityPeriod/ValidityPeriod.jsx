import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod({title_period, value, onChange, isPeriodValid, inputRef, touched, setTouched,nextRef}) {
    const handleInputChange = (e) => {
        let val = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (val.length >= 3) {
            val = val.slice(0, 2) + "/" + val.slice(2);
        }
        onChange(val); // Теперь передаем событие в родительский обработчик
        if (val.length === 5) {
            nextRef?.current?.focus();
        }
    };
    const handleBlur = () => {
        setTouched(true);
    }
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>{title_period}</div>
            <div className={styles.info}>
                <input className={`${styles.validityPeriod} ${!isPeriodValid && touched ? styles.invalid : ""}`}
                       placeholder="MM/YY"
                       value={value}
                       onChange={handleInputChange}
                       onBlur={handleBlur}
                       ref={inputRef}
                />
                {!isPeriodValid && touched && <div className={styles.error}>Не вірний період</div>}
            </div>
        </div>
    );
}

export default ValidityPeriod;