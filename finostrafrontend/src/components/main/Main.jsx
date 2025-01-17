import React, { useState } from "react";
import Header from "../header/Header";  
import Footer from "../Footer/Footer";  
import styles from "./Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import DigitalBankCard from "../DigitalBankCard/DigitalBankCard";
import CardAnotherBank from "../CardAnotherBank/CardAnotherBank";

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
                    <DigitalBankCard isDarkMode={isDarkMode}/>
                    <CardAnotherBank isDarkMode={isDarkMode}/>
                    <div>
                        <img src="./img/star 3.png" className={styles.star}/>
                    </div>
                    <div>
                        <img className={styles.tab_message} src="./icons/tabler_message.svg"/>
                    </div>
                </main>

            </div>

            <Footer isDarkMode={isDarkMode}/>
        </div>
    );
};

export default Main;
