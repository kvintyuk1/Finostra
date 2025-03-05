import React from "react";
import styles from "./search.module.css";

function Search({isDarkMode}) {
    return (
        <div className={`${styles.container} ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className={styles.input_wrapper}>
                <img src="./icons/icon_search.svg" alt=""/>
                <input type="text" placeholder="Пошук" className={styles.search_input}/>
            </div>
        </div>
    );
}

export default Search;