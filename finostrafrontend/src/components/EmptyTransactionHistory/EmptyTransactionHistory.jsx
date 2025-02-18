import React from 'react';
import styles from './emptyTransactionHistory.module.css';

const EmptyTransactionHistory = ({isDarkMode}) => {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_transaction}>
                    <div className={styles.title}>Ваша історія транзакцій ще попереду!</div>
                    <img src="./img/star 3.png" alt=""/>
                </div>
                <div className={styles.order_transaction}>
                    Замовте або додайте картку, щоб почати користуватися банком.
                </div>
            </div>
        </div>
    )
}
export default EmptyTransactionHistory;