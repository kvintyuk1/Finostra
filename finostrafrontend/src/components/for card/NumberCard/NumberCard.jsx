import React from "react";
import styles from "./numberCard.module.css";

function NumberCard({title_card,colorTitle="whiteTitle",value,colorValue="greyValue",
                        img_card, showLine=true}) {
    return (
        <div className={styles.container}>
            <div className={`${styles.title_card} ${styles[colorTitle]}`}>{title_card}</div>
            <div className={styles.container_numberCard}>
                <div className={styles.wrapper_numberCard}>
                    <input type="text"
                           className={`${styles.input_card} ${styles[colorValue]}`}
                           value={value}
                    />
                    <img src={img_card} alt=""/>
                </div>
                {showLine && <div className={styles.line}></div>}
            </div>
        </div>
    );
}

export default NumberCard;