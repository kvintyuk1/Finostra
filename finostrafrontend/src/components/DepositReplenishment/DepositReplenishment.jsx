import React from "react";
import styles from "./depositReplenishment.module.css";
import SliderSum from "../SliderSum/SliderSum";

function DepositReplenishment() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Поповнення вкладу</div>
            <div className={styles.wrap_item}>
                <input type="checkbox"/>
                <div className={styles.text}>Щомісячне поповнення</div>
            </div>
            <div className={styles.wrap_item}>
                <input type="checkbox"/>
                <div className={styles.text}>Без поповнення в перший місяць</div>
            </div>
            <SliderSum/>
        </div>
    );
}

export default DepositReplenishment;