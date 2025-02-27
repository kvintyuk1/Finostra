import React from "react";
import styles from "./numberCard.module.css";

function NumberCard() {
    return (
        <div className={styles.container}>
            <div className={styles.title_card}>Номер картки</div>
            <div className={styles.container_numberCard}>
                <div className={styles.wrapper_numberCard}>
                    <input type="text"
                           className={styles.input_card}
                           placeholder="0000 0000 0000 0000"
                    />
                    <img src="./icons/card_white2.svg" alt=""/>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default NumberCard;