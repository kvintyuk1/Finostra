import React from "react";
import styles from "./total_Sum.module.css";

function Total_Sum({title_totalSum,totalSum,title_color="whiteText", fontWeight="normal",
                   isRow=false,hideBorder=false,isMargin=false}) {
    return (
        <div className={`${styles.total_block} ${isRow ? styles.row : ""}`}>
            <div className={`${styles.title} ${styles[title_color]} ${styles[fontWeight]} ${isMargin ? styles.marginLeft : ""}`}>{title_totalSum}</div>
            <div className={styles.wrapper_total}>
                <input type="text" className={`${styles.total} ${hideBorder ? styles.noBorder : ""}`} value={totalSum}/>
            </div>
        </div>
    );
}

export default Total_Sum;