import React from 'react';
import styles from "./transactionHistory.module.css";
import LayoutTransactionHistory from "../LayoutTransactionHistory/LayoutTransactionHistory";

const TransactionHistory = ({isDarkMode}) => {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <LayoutTransactionHistory/>

        </div>
    )
}
export default TransactionHistory;