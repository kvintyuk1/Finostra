import React from "react";
import styles from "./CW_kod.module.css";

function CW_kod({title_kod,cw_kod,img_kod}) {
    return (
        <div className={styles.container_cw_kod}>
            <div className={styles.title}>{title_kod}</div>
            <div className={styles.info}>
                <div className={styles.wrap_cw_kod}>
                    <div className={styles.cw_kod}>{cw_kod}</div>
                    <img src={img_kod} alt=""/>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default CW_kod;