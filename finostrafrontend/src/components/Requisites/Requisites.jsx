import React, { useContext } from "react";
import styles from "./requisites.module.css";
import { LanguageContext } from "../LanguageContext";
import { requisitesTranslations } from "./requisitesTranslations";

function Requisites() {
    const { language } = useContext(LanguageContext);
    const t = requisitesTranslations[language] || requisitesTranslations["UA"];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>{t.title}</div>
                    <div className={styles.subtitle}>{t.subtitle}</div>
                </div>
                <div className={styles.wrapper_info}>
                    
                    <div className={styles.wrapper_item}>
                        <div className={styles.wrapper_valuta}>
                            <div className={styles.placeholder}></div>
                            <div className={styles.wrap_name}>
                                <div className={styles.name}>{t.placeholder}</div>
                                <div className={styles.subname}>{t.placeholderSubname}</div>
                            </div>
                        </div>
                        <img src="/icons/arrow_out16.svg" className={styles.arrow} alt=""/>
                    </div>

                    
                    {t.currencies.map(({ img, name, subname }, index) => (
                        <div key={index} className={styles.wrapper_item}>
                            <div className={styles.wrapper_valuta}>
                                <img src={`/img/${img}.png`} className={styles.flag} alt=""/>
                                <div className={styles.wrap_name}>
                                    <div className={styles.name}>{name}</div>
                                    <div className={styles.subname}>{subname}</div>
                                </div>
                            </div>
                            <img src="/icons/arrow_out16.svg" className={styles.arrow} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Requisites;
