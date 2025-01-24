import React, {useState} from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import styles from "./Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import DigitalBankCard from "../DigitalBankCard/DigitalBankCard";
import CardAnotherBank from "../CardAnotherBank/CardAnotherBank";
import TransferToCard from "../TransferToCard/TransferToCard";
import MobileRecharge from "../MobileRecharge/MobileRecharge";
import Payment from "../Payment/Payment";
import CreditProducts from "../CreditProducts/CreditProducts";
import Converter from "../Converter/Converter";
import Banner from "../Banner/Banner";
import News from "../News/News";

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('UA');

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className={`${styles.App} ${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <Header
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                selectedLanguage={selectedLanguage}
                handleLanguageChange={handleLanguageChange}
            />
            <div className={styles.wrapper_main}>
                <Sidebar/>
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
                            <Converter isDarkMode={isDarkMode}/>
                                <News isDarkMode={isDarkMode}/>
                            </div>
                        </div>

                    </div>


                </main>

            </div>
            <Footer isDarkMode={isDarkMode}/>
        </div>
    );
};

export default Main;
