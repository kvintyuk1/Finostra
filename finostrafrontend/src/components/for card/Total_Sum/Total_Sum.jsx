import React from "react";
import styles from "./total_Sum.module.css";

function Total_Sum({title_totalSum,totalSum,title_color="whiteText", fontWeight="normal"}) {
    return (
        <div className={styles.total_block}>
            <div className={`${styles.title} ${styles[title_color]} ${styles[fontWeight]}`}>{title_totalSum}</div>
            <div className={styles.wrapper_total}>
                <input type="text" className={`${styles.total}`} placeholder={totalSum}/>
            </div>
        </div>
    );
}

export default Total_Sum;