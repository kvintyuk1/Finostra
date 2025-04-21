import React, { useContext } from "react";
import styles from "./filter.module.css";
import { filterTranslations } from "./filterTranslations";
import { LanguageContext } from "../LanguageContext";

function Filter() {
    const { language } = useContext(LanguageContext);
    console.log("Current language:", language); 

    const translations = filterTranslations[language] || filterTranslations["UA"];

    return (
        <div className={styles.container}>
            <span className={styles.title}>{translations.filter}</span>
            <img src="/icons/filter.svg" alt=""/>
        </div>
    );
}

export default Filter;
