import React from "react";
import styles from "./CW_kod.module.css";

function CW_kod({onChange,title_kod, cw_kod, setCwKod,img_kod, inputRef}) {
    const handleChange = (e) => {
        const val = e.target.value.replace(/\D/g, "").slice(0, 3);
        setCwKod(val);
    };
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
                        value={cw_kod}
                        onChange={handleChange}
                    />
                    <img src={img_kod} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default CW_kod;