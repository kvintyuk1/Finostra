import React from "react";
import styles from "./transferData.module.css";
import Change from "../Change/Change";

function TransferData({isSum,isCurrency,isCountry}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_itemTransfer}>
                <div className={styles.wrap_name}>
                    <div className={styles.name}>Дані переказу</div>
                    <Change/>
                </div>
                <div className={styles.wrap_item}>
                    <div className={styles.item}>
                        <div className={styles.text}>Сума переказу</div>
                        <div className={styles.number}>{isSum}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>Валюта переказу</div>
                        <div className={styles.number}>{isCurrency}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>Країна одержувача</div>
                        <div className={styles.number}>{isCountry}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferData;