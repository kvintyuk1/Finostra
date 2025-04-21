import React, {useState} from "react";
import styles from "./layout.module.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router-dom";

function Layout() {
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
            <div className={styles.wrapper_content}>
                <Sidebar isDarkMode={isDarkMode}/>
                <div className={styles.main_content}>
                    <Outlet context={{ isDarkMode, toggleTheme }}/> 
                </div>
            </div>
            <Footer isDarkMode={isDarkMode}/>
        </div>
    )
}

export default Layout;