import React from "react";
import styles from "./transferToCardInfo.module.css";

function TransferToCardInfo() {
    return (
        <div className={styles.container}>
            <img src="./icons/card_white.svg" alt=""/>
             <div className={styles.wrapper_info}>
                 <div className={styles.title}>Переказ на картку</div>
                 <div className={styles.subtitle}>Переказ між власними рахунками, а також на картки VISA/MasterCard українських та
                     іноземних банків.</div>
             </div>
        </div>
    );
}

export default TransferToCardInfo;