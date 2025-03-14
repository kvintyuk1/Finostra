import React, {useState} from "react";
import styles from "./header.module.css";


const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    return (
        <button className={styles.themeToggle} onClick={toggleTheme}>
            <div className={`${styles.sunIcon} ${isDarkMode ? 'hidden' : ''}`}></div>
            <div className={`${styles.moonIcon} ${isDarkMode ? '' : 'hidden'}`}></div>
        </button>
    );
};

function Header({ isDarkMode, toggleTheme, selectedLanguage, handleLanguageChange }) {
    return (
        <div className={`${styles.App} ${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <header className={styles.header}>
                <div className={styles.frame757}>
                    <div className={styles.Frame614}>
                        <div className={styles.Rectangle2}></div>
                        <div className={styles.Logo}>Finostra</div>
                    </div>
                    <div>
                        <div className={`${styles.searchBar} ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                            <input type="text" placeholder="Пошук" className={styles.search_input}/>
                            <div className={styles.search_icon}></div>
                        </div>
                        <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
                    </div>
                    <div className={styles.Frame756}>
                        <div className={styles.Frame755}>
                            <div className={styles.Frame751}>
                                <div className={styles.Frame708}>
                                    <span>$</span>
                                    <span>41.2 / 41.841</span>
                                </div>
                            </div>
                            <div className={styles.Frame753}>
                                <div className={styles.Frame744}>
                                    <select
                                        className={styles.language_select}
                                        value={selectedLanguage}
                                        onChange={handleLanguageChange}
                                    >
                                        <option value="UA">UA</option>
                                        <option value="EN">EN</option>
                                        <option value="RU">RU</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Frame636}>
                            <div className={styles.Frame612}>
                                <div className={styles.icon_user}></div>
                                <span>Вхід</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;