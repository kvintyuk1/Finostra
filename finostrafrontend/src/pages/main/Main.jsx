import React from "react";
import styles from "./Main.module.css";
import DigitalBankCard from "../../components/DigitalBankCard/DigitalBankCard";
import CardAnotherBank from "../../components/CardAnotherBank/CardAnotherBank";
import TransferToCard from "../../components/TransferToCard/TransferToCard";
import MobileRecharge from "../../components/MobileRecharge/MobileRecharge";
import Payment from "../../components/Payment/Payment";
import CreditProducts from "../../components/CreditProducts/CreditProducts";
import Converter from "../../components/Converter/Converter";
import Banner from "../../components/Banner/Banner";
import News from "../../components/News/News";
import {useOutletContext} from "react-router-dom";
import Wallet from "../../components/Wallet/Wallet";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import LayoutTransactionHistory from "../../components/LayoutTransactionHistory/LayoutTransactionHistory";

const Main = () => {
    const { isDarkMode } = useOutletContext();

    return (
        <div className={`${styles.App} ${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.wrapper_main}>
                <main className={styles.main_v_3}>
                    <div className={styles.container}>
                        <Banner isDarkMode={isDarkMode}/>
                        <div className={styles.wrapper_item_column}>
                            <div className={styles.item_column}>
                                <Wallet isDarkMode={isDarkMode}/>
                                <TransferToCard isDarkMode={isDarkMode}/>
                            </div>
                            <div className={styles.item_column}>
                                <TransactionHistory isDarkMode={isDarkMode}/>
                                <MobileRecharge isDarkMode={isDarkMode}/>
                            </div>
                        </div>

                        <div className={styles.wrapper_item_column}>
                            <div className={styles.item_column}>
                                <Payment isDarkMode={isDarkMode}/>
                                <CreditProducts isDarkMode={isDarkMode}/>
                            </div>
                            <div className={styles.item_column}>
                                <Converter isDarkMode={isDarkMode}c/>
                                <News isDarkMode={isDarkMode}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Main;
