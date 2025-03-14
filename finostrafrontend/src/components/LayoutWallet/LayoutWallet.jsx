import React from 'react';
import styles from './layoutWallet.module.css';
import WalletCard from "../WalletCard/WalletCard";
import AddCard from "../AddCard/AddCard";

const LayoutWallet = ({isDarkMode})=>{
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_container}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.img_title}>
                            <img src="/img/wallet.png" alt=""/>
                            <div className={styles.title}>Гаманець</div>
                        </div>
                        <img src="/icons/arrow-out_right.svg" alt=""/>
                    </div>
                    <AddCard/>
                </div>
            </div>
        </div>
    )
}
export default LayoutWallet;