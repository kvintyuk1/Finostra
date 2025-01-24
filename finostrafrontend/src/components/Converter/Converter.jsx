import React from "react";
import styles from "./converter.module.css";

function Converter({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>Конвертор валют</div>
                    <div className={styles.wrapper_exchange}>
                        <div className={styles.text}>41,46</div>
                        <img src={isDarkMode ? "./icons/grivna.svg" : "./icons/grivna-white.svg"} alt=""/>
                        <div className={styles.text}>=</div>
                        <div className={styles.text}>1</div>
                        <img src={isDarkMode ? "./icons/dollar.svg" : "./icons/dollar-white.svg"} alt=""/>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.wrapper_content}>
                        <div className={styles.container_exchange}>
                            <div className={styles.exchange}>
                                <div className={styles.wrapper_rate}>
                                    <div className={styles.country}>
                                        <img src="./icons/flag-ukraine.svg" alt=""/>
                                        <div className={styles.currency}>UAH</div>
                                        <img src={isDarkMode ? "./icons/grivna.svg" : "./icons/grivna-white.svg"} alt=""/>
                                        <img src={isDarkMode ? "./icons/arrow-down.svg" : "./icons/arrow-down-white.svg"} alt=""/>
                                    </div>
                                    <div>
                                        <hr className={`${styles.hr} ${styles.size}`}/>
                                    </div>
                                    <div className={styles.balance}>
                                        <span>Баланс :</span>
                                        <span>23 000 </span>
                                        <img src="./icons/grivna.svg" alt=""/>
                                    </div>
                                </div>
                                <div className={styles.total}>
                                    <span>360, 16</span>
                                    <div>
                                        <hr className={`${styles.hr} ${styles.big_size}`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.exchange}></div>
                        </div>

                        <div className={styles.container_exchange}>
                            <div className={styles.exchange}>
                                <div className={styles.wrapper_rate}>
                                    <div className={styles.country}>
                                        <img src="./icons/flag-usa.svg" alt=""/>
                                        <div className={styles.currency}>USD</div>
                                        <img src={isDarkMode ? "./icons/dollar.svg" : "./icons/dollar-white.svg"} alt=""/>
                                        <img src={isDarkMode ? "./icons/arrow-down.svg" : "./icons/arrow-down-white.svg"} alt=""/>
                                    </div>
                                    <div>
                                        <hr className={`${styles.hr} ${styles.size}`}/>
                                    </div>
                                    <div className={styles.balance}>
                                        <span>Баланс :</span>
                                        <span>0 </span>
                                        <img src="./icons/dollar.svg" alt=""/>
                                    </div>
                                </div>
                                <div className={styles.total}>
                                    <span>8,69</span>
                                    <div>
                                        <hr className={`${styles.hr} ${styles.big_size}`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.exchange}></div>
                        </div>
                    </div>
                    <div className={styles.img_switch}>
                        <img src={isDarkMode ? "./icons/switch.svg" : "./icons/switch-white.svg"} alt=""/>
                    </div>
                </div>
                <img className={styles.star7} src="./icons/star 7.svg" alt="star"/>
                <img className={styles.star8} src="./icons/star 8.svg" alt="star"/>
                <img className={styles.star9} src="./icons/star 9.svg" alt="star"/>
                <img className={styles.star10} src="./icons/star 10.svg" alt="star"/>
                <img className={styles.star11} src="./icons/star 11.svg" alt="star"/>
                <img className={styles.star12} src="./icons/star 12.svg" alt="star"/>
            </div>
        </div>
            )
            }

            export default Converter;