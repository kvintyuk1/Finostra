import React from "react";
import styles from "./payment.module.css";

function Payment({ isDarkMode }){
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src={isDarkMode ? "./icons/payment.svg" : "./icons/payment_black.svg"}/>
                    <span>Платіж</span>
                </div>
                <div className={styles.wrapper_contentCard}>
                    <div className={styles.contentCard}>
                        <div className={styles.numberCard}>UAXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                        <div className={styles.wrapper_img}>
                            <img src={isDarkMode ? "./icons/arrow-out-white.svg" : "./icons/arrow-out.svg"}/>
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.text}>
                        <span>IBAN, ЄДРПОУ, номер рахунку або назва одержувача</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;