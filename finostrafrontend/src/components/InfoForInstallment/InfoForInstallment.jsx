import React from "react";
import styles from "./infoForInstallment.module.css";

function InfoForInstallment({title_info,description_info}) {
    return (
        <div className={styles.container}>
            <div className={styles.title_info}>{title_info}</div>
            <div className={styles.description_info}>{description_info}</div>
        </div>
    );
}

export default InfoForInstallment;