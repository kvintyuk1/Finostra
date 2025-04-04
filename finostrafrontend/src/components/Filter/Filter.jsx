import React from "react";
import styles from "./filter.module.css";

function Filter() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Фільтр</span>
            <img src="/icons/filter.svg" alt=""/>
        </div>
    );
}

export default Filter;