import React from "react";
import styles from "./total_Sum.module.css";

function Total_Sum({
                       title_totalSum, sum, title_color = "whiteText", fontWeight = "normal",
                       total_color = "totalWhite", isRow = false, hideBorder = false,
                       isMargin = false, currency,sizeTotalBlock="size200",
                       currencyColor="currencyColorWhite",value,onChange
                   }) {
    return (
        <div className={`${styles.total_block} ${styles[sizeTotalBlock]} ${isRow ? styles.row : ""}`}>
            <div className={`${styles.title} ${styles[title_color]} ${styles[fontWeight]} 
                 ${isMargin ? styles.marginLeft : ""}`}>{title_totalSum}</div>
            <div className={styles.wrapper_total}>
                <input type="text"
                       className={`${styles.total} ${styles[total_color]} ${hideBorder ? styles.noBorder : ""}`}
                       placeholder="00.00"
                       value={sum}
                       onChange={onChange}
                      />
                {currency && <div className={`${styles.currency} ${styles[currencyColor]}`}>{currency}</div>}
            </div>
        </div>
    );
}

export default Total_Sum;