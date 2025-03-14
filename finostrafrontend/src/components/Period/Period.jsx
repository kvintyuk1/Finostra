import React from "react";
import styles from "./period.module.css";

function Period() {
    return (
        <div className={styles.container}>
            <div className={styles.input_wrapper}>
                <img src="/icons/white_calendar-linear.svg" alt=""/>
                <input type="text" name="period" id="period" className={styles.input_period}
                       placeholder="Період"/>
            </div>
        </div>
    );
}

export default Period;