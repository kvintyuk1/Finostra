import React from "react";
import styles from "./availableCards.module.css";
import CardUniversal from "../CardUniversal/CardUniversal";

function AvailableCards({title,infoContent,heightCard="height361"}) {
    return (
        <div className={`${styles.container} ${styles[heightCard]}`}>
            <div className={styles.wrapper_availableCards}>
                <div className={styles.text}>{title}</div>
                <CardUniversal
                totalMoney="6345.00"
                hideImg={false}
                />
            </div>
            <span className={styles.wrapper_text}>
                   {infoContent}
            </span>
        </div>
    );
}

export default AvailableCards;