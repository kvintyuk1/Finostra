import React from "react";
import styles from "./checkbox.module.css";

function Checkbox() {
    return (
        <div className={styles.container}>
            <input type="checkbox" className={styles.checkbox}/>
        </div>
    );
}

export default Checkbox;