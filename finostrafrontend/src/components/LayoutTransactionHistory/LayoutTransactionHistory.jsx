import React from 'react';
import styles from './layoutTransactionHistory.module.css';
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import TransactionHistoryContent from "../TransactionHistoryContent/TransactionHistoryContent";
import EmptyTransactionHistory from "../EmptyTransactionHistory/EmptyTransactionHistory";

const LayoutTransactionHistory = ({isDarkMode})=>{
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_container}>
                    <div className={styles.container_title}>
                        <div className={styles.img_title}>
                            <img src="./img/transaction_history.png" alt=""/>
                            <div className={styles.title}>Історія транзакцій</div>
                        </div>
                        <img src="./icons/arrow-out_right.svg" alt=""/>
                    </div>
                    <EmptyTransactionHistory/>
                </div>
                <img src="./icons/tabler_message.svg" className={styles.container_img} alt=""/>
            </div>
        </div>
    )
}
export default LayoutTransactionHistory;