import React from "react";
import styles from "./change.module.css";

function Change({onClick}) {
    return (
        <div className={styles.wrap_change_img} onClick={onClick}>
            <div className={styles.change}>Змінити</div>
            <img src="/icons/pencil.svg" alt=""/>
        </div>
    );
}

export default Change;