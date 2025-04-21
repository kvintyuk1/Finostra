import React, { useContext } from 'react';
import styles from './layoutWallet.module.css';
import WalletCard from "../WalletCard/WalletCard";
import AddCard from "../AddCard/AddCard";
import { LanguageContext } from '../LanguageContext';
import { walletTranslations } from './walletTranslations';

const LayoutWallet = ({ isDarkMode }) => {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = walletTranslations[selectedLanguage];

    return (
        <div className={`${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_container}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.img_title}>
                            <img src="/img/wallet.png" alt="" />
                            <div className={styles.title}>{t.title}</div>
                        </div>
                        <img src="/icons/arrow-out_right.svg" alt="" />
                    </div>
                    <AddCard isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};

export default LayoutWallet;
