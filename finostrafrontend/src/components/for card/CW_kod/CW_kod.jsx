import React from "react";
import styles from "./CW_kod.module.css";

function CW_kod({title_kod, cw_kod, img_kod, inputRef}) {
    return (
        <div className={styles.container_cw_kod}>
            <div className={styles.title}>{title_kod}</div>
            <div className={styles.info}>
                <div className={styles.wrap_cw_kod}>
                    <input
                        className={styles.cw_kod}
                        placeholder="***"
                        maxLength={3}
                        ref={inputRef}
                    />
                    <img src={img_kod} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default CW_kod;