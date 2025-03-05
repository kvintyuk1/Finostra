import React from "react";
import styles from "./numberCard.module.css";

function NumberCard({title_card,placeholder,img_card}) {
    return (
        <div className={styles.container}>
            <div className={styles.title_card}>{title_card}</div>
            <div className={styles.container_numberCard}>
                <div className={styles.wrapper_numberCard}>
                    <input type="text"
                           className={styles.input_card}
                           placeholder={placeholder}
                    />
                    <img src={img_card} alt=""/>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default NumberCard;