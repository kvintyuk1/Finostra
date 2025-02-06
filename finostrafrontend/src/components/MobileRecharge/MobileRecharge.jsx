import React from "react";
import styles from "./mobileRecharge.module.css";

function MobileRecharge({ isDarkMode }) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src="./icons/mobileRecharge.svg" alt=""/>
                    <span>Поповнення мобільного</span>
                </div>
                <div className={styles.wrapper_contentCard}>
                    <div className={styles.contentCard}>
                        <div className={styles.wrapper_countryNumber}>
                            <img src="./icons/flag-ukraine.svg" alt=""/>
                            <div className={styles.countryNumber}>
                                <div className={styles.numberCard}>
                                    <input type="text" className={styles.country_number} placeholder="+380"/>
                                </div>
                                <img src="./icons/arrow-down.svg" alt=""/>
                            </div>
                            <div>
                                <input type="number" className={styles.number_mobile} placeholder="976 54 32 0 1"/>
                            </div>
                        </div>

                        <img src="./icons/arrow-out.svg" alt=""/>

                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.text}>
                        Поповнюй мобільний – швидко, легко, без зайвих турбот!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileRecharge;