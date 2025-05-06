import React, { useContext } from 'react';
import styles from './emptyTransactionHistory.module.css';
import { LanguageContext } from '../LanguageContext';
import { emptyTransactionHistoryTranslations } from './emptyTransactionHistoryTranslations';

const EmptyTransactionHistory = ({ isDarkMode }) => {
    const { language } = useContext(LanguageContext);
    const t = emptyTransactionHistoryTranslations[language];

    return (
        <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_transaction}>
                    <div className={styles.title}>{t.title}</div>
                    <img src="./img/star 3.png" alt=""/>
                </div>
                <div className={styles.order_transaction}>
                    {t.description}
                </div>
            </div>
        </div>
    );
};

export default EmptyTransactionHistory;
