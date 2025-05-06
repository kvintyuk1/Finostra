import React, { useContext } from "react";
import styles from "./phoneNumber.module.css";
import { LanguageContext } from "../../LanguageContext";
import { phoneNumberTranslations } from "./phoneNumberTranslations";

function PhoneNumber() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = phoneNumberTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.title}>{t.title}</div>
            <div className={styles.wrapper_phoneInfo}>
                <div className={styles.wrapper_blockCode}>
                    <img src="/icons/flag_ukraine25.svg" alt="Ukraine Flag"/>
                    <div className={styles.code}>+380</div>
                    <img src="/img/polygon.png" className={styles.poligon} alt="Dropdown"/>
                </div>
                <div className={styles.lineVertical}></div>
                <div className={styles.phoneNumber}>000 000 00 00</div>
            </div>
        </div>
    );
}

export default PhoneNumber;
