import React from "react";
import styles from "./CW_kod.module.css";

function CW_kod() {
    return (
        <div className={styles.container_CW_kod}>
            <div className={styles.title}>CW-код</div>
            <div className={styles.info}>
                <div className={styles.wrap_CW_kod}>
                    <div className={styles.CW_kod}>***</div>
                    <img src="./icons/information.svg" alt=""/>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default CW_kod;