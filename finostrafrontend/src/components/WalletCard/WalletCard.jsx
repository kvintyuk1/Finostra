import React from 'react';
import styles from './walletCard.module.css';
import CardInfo from "../for card/CardInfo/CardInfo";

const WalletCard = ({cardNumber, expiryDate, cvv, balance, isDarkMode, showPoints = true }) => {
    return (
        <div className={`${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_info}>
                    <img src="/img/finostra_card.jpg" className={styles.img_style} alt="" />
                    
                    <CardInfo
                        titleCard={cardNumber || "Виберіть картку"}
                        expiryDate={expiryDate || ""}
                        cardNumber={cvv || ""}
                        balance={{ amount: balance || 0, currency: "UAH" }}
                    />
                </div>
                <div className={styles.points}>
                    {showPoints && (
                        <img src="/icons/points_vertical.svg" alt="options" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
