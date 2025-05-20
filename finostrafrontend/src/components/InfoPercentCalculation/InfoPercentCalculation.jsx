import React from "react";
import styles from "./infoPercentCalculation.module.css";

function InfoPercentCalculation() {
    return (
        <div className={styles.container}>
            <img src="/icons/info_percent24.svg" alt=""/>
            <div className={styles.description}>Розрахунок процентів має довідковий характер</div>
        </div>
    );
}

export default InfoPercentCalculation;