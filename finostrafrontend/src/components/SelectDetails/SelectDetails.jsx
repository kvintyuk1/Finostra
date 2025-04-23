import React from "react";
import styles from "./selectDetails.module.css";

function SelectDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.title}>Реквізити</div>
                <div className={styles.wrap_details}>
                    <div className={styles.wrap_item}>
                        <span className={styles.name}>Виберіть призначення платежу</span>
                            <select className={styles.wrap_options}>
                                <option>Виберіть</option>
                            </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectDetails;