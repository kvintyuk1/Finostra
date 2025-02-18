import React from "react";
import styles from './wallet.module.css';
import LayoutWallet from "../LayoutWallet/LayoutWallet";

const Wallet = ({isDarkMode}) => {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <LayoutWallet/>
        </div>
    )
}
export default Wallet;