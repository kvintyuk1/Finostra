import React from 'react';
import styles from './walletCard.module.css';

const WalletCard = ({isDarkMode, showPoints = true})=>{
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_info}>
                    <img src="/img/finostra_card.jpg" className={styles.img_style} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.title_card}>Картка Універсальна</div>
                        <div className={styles.container_number}>

                            <img src="/icons/circle.svg" alt=""/>
                            <div className={styles.number_c}>1234</div>
                            <div className={styles.vertical_line}></div>

                            <div className={styles.UA}>UA92</div>
                            <img src="/icons/circle.svg" alt=""/>
                            <div className={styles.number_ac}>1010101</div>

                        </div>
                        <div className={styles.money}>6345.00 UAH</div>
                    </div>
                </div>
                <div className={styles.points}>
                    {
                        showPoints && (
                            <img src="/icons/points_vertical.svg" alt=""/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default WalletCard;