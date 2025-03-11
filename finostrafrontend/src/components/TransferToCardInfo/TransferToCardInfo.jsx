import React from "react";
import styles from "./transferToCardInfo.module.css";

function TransferToCardInfo({img,title,subtitle}) {
    return (
        <div className={styles.container}>
            <img src={`./icons/${img}.svg`} alt=""/>
             <div className={styles.wrapper_info}>
                 <div className={styles.title}>{title}</div>
                 <div className={styles.subtitle}>{subtitle}</div>
             </div>
        </div>
    );
}

export default TransferToCardInfo;