import React, {useState} from "react";
import styles from "./numberCard.module.css";

function NumberCard({title_card,colorTitle="whiteTitle",colorValue="greyValue",
                        img_card, showLine=true,onChange, value,cardValid}) {
    return (
        <div className={styles.container}>
            <div className={`${styles.title_card} ${styles[colorTitle]}`}>{title_card}</div>
            <div className={styles.container_numberCard}>
                <div className={styles.wrapper_numberCard}>
                    <input type="text"
                           className={`${styles.input_card} ${styles[colorValue]} ${!cardValid ? styles.inValid : ""}`}
                           value={value}
                           onChange={onChange}
                           placeholder="0000 0000 0000 0000"
                    />
                    <img src={img_card} alt=""/>
                </div>
                {showLine && <div className={styles.line}></div>}
                {cardValid === false && (
                    <div className={styles.errorText}>Номер картки недійсний</div>
                )}
                {cardValid === true && (
                    <div className={styles.successText}>Номер картки дійсний</div>
                )}
            </div>
        </div>
    );
}

export default NumberCard;