import React from "react";
import styles from "./period.module.css";

function Period({sizePeriod="size209",iconSrc="/icons/white_calendar-linear.svg",
                iconPosition="left"}) {
    return (
        <div className={`${styles.container} ${styles[sizePeriod]}`}>
            <div className={`${styles.input_wrapper}`}>
                {iconPosition === "left" && <img src={iconSrc} className={styles.iconLeft} alt=""/>}
                <input type="text" name="period" id="period"
                       className={`${styles.input_period} ${styles[sizePeriod]} 
                       ${iconPosition === "left" ? styles.input_width_left_icon : ""}
                       ${iconPosition === "right" ? styles.input_width_right_icon : ""}`}
                       placeholder="Період"/>
                {iconPosition === "right" && <img src={iconSrc} className={styles.iconRight} alt=""/>}
            </div>
        </div>
    );
}

export default Period;