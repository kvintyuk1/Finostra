import React from "react";
import styles from "./sendTransfer.module.css";

function SendTransfer() {
    return (
        <div className={styles.container}>
            <img src="/icons/arrow_out_left10.svg" alt=""/>
            <div className={styles.breadCrumbs_item}>Відправлення переказу</div>
        </div>
    );
}

export default SendTransfer;