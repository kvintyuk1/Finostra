import React from "react";
import styles from "./transferToCard.module.css";

function TransferToCard({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src="./icons/transfer_black.svg"/>
                    <span>Переказ на картку</span>
                </div>
                <div className={styles.wrapper_contentCard}>
                    <div className={styles.contentCard}>
                        <div className={styles.numberCard}>0000 0000 0000 0000</div>
                        <div className={styles.wrapper_img}>
                            <img src="./icons/cardLinear.svg"/>
                            <img src="./icons/arrow-out.svg"/>
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.text}>
                        <span>VISA/MasterCard українських та закордонних банків</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferToCard;