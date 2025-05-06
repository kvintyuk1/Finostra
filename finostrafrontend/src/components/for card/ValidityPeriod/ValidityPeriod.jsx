import React from "react";
import styles from "./validityPeriod.module.css";

function ValidityPeriod({title_period,value,onChange,periodValid,nextRef}) {
    const handleInputChange = (e) => {
      let val = e.target.value.replace(/\D/g, "").slice(0,4);
      if(val.length >= 3){
        val = val.slice(0,2) + "/" +  val.slice(2);
      }
          onChange(val); // Теперь передаем событие в родительский обработчик
    };
    return (
        <div className={styles.container_validityPeriod}>
            <div className={styles.title}>{title_period}</div>
            <div className={styles.info}>
                <input className={`${styles.validityPeriod} ${periodValid ? "" : styles.invalid}`}
                       placeholder="MM/YY"
                       value={value}
                       onChange={handleInputChange}
                       ref={nextRef}
                />
                {!periodValid && <div className={styles.error}>Не вірний період</div>}
            </div>
        </div>
    );
}

export default ValidityPeriod;