import React from "react";
import styles from "./sumForReceive.module.css";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import total_Sum from "../for card/Total_Sum/Total_Sum";

function SumForReceive({selectedLanguage, handleLanguageChange,sum,setSum}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <Total_Sum
                    title_totalSum="Сума"
                    value={sum}
                    onChange={(e)=>setSum(e.target.value)}
                    fontWeight="bold"
                />
                <div className={styles.wrap_languages}>
                    <select
                        className={styles.language_select}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        <option value="UA">UAH</option>
                        <option value="EN">EN</option>
                        <option value="RU">RU</option>
                    </select>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    );
}

export default SumForReceive;