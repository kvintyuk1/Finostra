import React from "react";
import styles from "./availableCards.module.css";
import CardUniversal from "../CardUniversal/CardUniversal";

function AvailableCards({availableCards, text,text_info, heightCard = "height361"}) {
    return (
        <div className={`${styles.container} ${styles[heightCard]}`}>
            <div className={styles.wrapper_availableCards}>
                <div className={styles.text}>{availableCards}</div>
                <CardUniversal
                    totalMoney="6345.00"
                    hideImg={false}
                />
            </div>
            <span className={styles.wrapper_text}>
                   <div className={styles.text}>{text}</div>
                   <span className={styles.text_info}>{text_info}</span>
            </span>
        </div>
    );
}

export default AvailableCards;