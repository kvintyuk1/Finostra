import React, { useContext } from "react";
import styles from "./buyingPartsEasy.module.css";
import { LanguageContext } from "../LanguageContext";
import { buyingPartsEasyTranslations } from "./buyingPartsEasyTranslations";

function BuyingPartsEasy() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tParts = buyingPartsEasyTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.title}>{tParts.containerTitle}</div>
            <div className={styles.wrapper_info}>
                {tParts.items.map(({ title, img, text }, index) => (
                    <div key={index} className={styles.wrapper_item}>
                        <div className={styles.title_item}>{title}</div>
                        <img src={`/img/${img}.png`} alt=""/>
                        <div className={styles.text}>{text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuyingPartsEasy;
