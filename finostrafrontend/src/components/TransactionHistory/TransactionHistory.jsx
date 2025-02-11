import React from 'react';
import styles from "./transactionHistory.module.css";

const transactionItem = [
    {icon: "rounding_balances.svg", text: "Округлення залишку на Скарбничку", time: "23:21", money: "-2 UAH"},
    {icon: "receipt_card.svg", text: "Від Mitchell Lana", time: "17:56", money: "+1000 UAH"},
    {icon: "rounding_balances.svg", text: "Округлення залишку на Скарбничку", time: "12:01", money: "-6 UAH"},
]

const TransactionHistory = ({isDarkMode}) => {
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
                    <div className={styles.container_info}>
                        {
                            transactionItem.map(({icon, text, time, money}, index) => (
                                <div key={index} className={styles.info}>
                                    <div className={styles.item_info}>
                                        <img src={`./icons/${icon}`} alt=""/>
                                        <div className={styles.transaction}>
                                            <div className={styles.text}>{text}</div>
                                            <div className={styles.time}>{time}</div>
                                        </div>
                                    </div>
                                    <div className={styles.money}>{money}</div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TransactionHistory;