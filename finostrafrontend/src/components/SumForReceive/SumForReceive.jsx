import React from "react";
import styles from "./sumForReceive.module.css";

function SumForReceive({selectedLanguage, handleLanguageChange}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.total_block}>
                    <div className={styles.title}>Сума</div>
                    <div className={styles.wrapper_total}>
                        <input type="text" className={styles.total} placeholder="00.00"/>
                    </div>
                </div>
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