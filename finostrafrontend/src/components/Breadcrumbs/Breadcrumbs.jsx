import React from "react";
import styles from "./breadcrumbs.module.css";

function Breadcrumbs() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_breadcrumbs}>
                <div className={styles.wrap_myDeposit}>
                    <img src="/icons/my_deposit18.svg" alt=""/>
                    <span className={styles.name}>Мої вклади</span>
                    <img src="/icons/arrow_out8.svg" alt=""/>
                </div>
                <span className={styles.openDeposit}>Відкрити вклад</span>
            </div>
        </div>
    );
}

export default Breadcrumbs;