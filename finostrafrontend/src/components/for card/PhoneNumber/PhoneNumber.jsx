import React from "react";
import styles from "./phoneNumber.module.css";
import Total_Sum from "../Total_Sum/Total_Sum";

function PhoneNumber() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Номер телефону</div>
            <div className={styles.wrapper_phoneInfo}>
                <div className={styles.wrapper_blockCode}>
                    <img src="/icons/flag_ukraine25.svg" alt=""/>
                    <div className={styles.code}>+380</div>
                    <img src="/img/polygon.png" className={styles.poligon} alt=""/>
                </div>
                <div className={styles.lineVertical}></div>
                <div className={styles.phoneNumber}>000 000 00 00</div>
            </div>
        </div>
    );
}

export default PhoneNumber;