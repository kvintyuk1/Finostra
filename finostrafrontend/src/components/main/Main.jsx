import React from "react";
import styles from "./Main.module.css";
import DigitalBankCard from "../DigitalBankCard/DigitalBankCard";
import CardAnotherBank from "../CardAnotherBank/CardAnotherBank";
import TransferToCard from "../TransferToCard/TransferToCard";
import MobileRecharge from "../MobileRecharge/MobileRecharge";
import Payment from "../Payment/Payment";
import CreditProducts from "../CreditProducts/CreditProducts";
import Converter from "../Converter/Converter";
import Banner from "../Banner/Banner";
import News from "../News/News";
import {useOutletContext} from "react-router-dom";

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
                                <DigitalBankCard isDarkMode={isDarkMode}/>
                                <TransferToCard isDarkMode={isDarkMode}/>
                            </div>
                            <div className={styles.item_column}>
                                <CardAnotherBank isDarkMode={isDarkMode}/>
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
