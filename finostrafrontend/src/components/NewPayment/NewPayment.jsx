import React, { useContext } from "react";
import styles from "./newPayment.module.css";
import Search from "../Search/Search";
import City from "../City/City";
import { LanguageContext } from "../LanguageContext";
import { newPaymentTranslations } from "./newPaymentTranslations";

function NewPayment() {
    const { selectedLanguage } = useContext(LanguageContext);
const t = newPaymentTranslations[selectedLanguage] || newPaymentTranslations["UA"];


    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>{t.title}</div>
                    <div className={styles.subtitle}>{t.subtitle}</div>
                </div>
                <div className={styles.wrapper_payment}>
                    <Search
                        sizeInput="width740"
                        placeholder={t.placeholder}
                        colorBorder="border-bottom_grey"
                    />
                    <City />
                </div>
            </div>
        </div>
    );
}

export default NewPayment;
