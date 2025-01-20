import React from "react";
import styles from "./mobileRecharge.module.css";

function MobileRecharge({ isDarkMode }) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src="./icons/mobileRecharge.svg"/>
                    <span>Поповнення мобільного</span>
                </div>
                <div className={styles.wrapper_contentCard}>
                    <div className={styles.contentCard}>
                        <div className={styles.wrapper_countryNumber}>
                            <img src="./icons/flag-ukraine.svg"/>
                            <div className={styles.countryNumber}>
                                <div className={styles.numberCard}>+380</div>
                                <img src="./icons/arrow-down.svg"/>
                            </div>
                            <div>
                                <span>976 54 32 0 1</span>
                            </div>
                        </div>

                        <img src="./icons/arrow-out.svg"/>

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