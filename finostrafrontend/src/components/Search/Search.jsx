import React from "react";
import styles from "./search.module.css";

function Search({isDarkMode,placeholder="Пошук",sizeInput="width209",colorBorder="border-bottom_white"}) {
    return (
        <div className={`${styles.container} ${styles[sizeInput]} ${styles[colorBorder]} ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className={styles.input_wrapper}>
                <img src="/icons/icon_search.svg" alt=""/>
                <input type="text" placeholder={placeholder} className={`${styles.search_input} ${styles[sizeInput]}`}/>
            </div>
        </div>
    );
}

export default Search;