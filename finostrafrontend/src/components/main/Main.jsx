import React, { useState } from "react";
import Header from "../header/Header";  
import Footer from "../Footer/Footer";  
import styles from "./Main.module.css";  

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
            <main className={styles.main_v_3}> 
            </main>
            <Footer isDarkMode={isDarkMode} /> 
        </div>
    );
};

export default Main;
