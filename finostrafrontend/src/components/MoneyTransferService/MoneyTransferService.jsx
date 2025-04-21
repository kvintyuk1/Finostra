import React, { useContext } from "react";
import styles from "./moneyTransferService.module.css";
import CollapsibleText from "../CollapsibleText/CollapsibleText";
import { LanguageContext } from "../LanguageContext";
import { moneyTransferServiceTranslations } from "./moneyTransferServiceTranslations";

function MoneyTransferService() {
    const { selectedLanguage } = useContext(LanguageContext); 
    const t = moneyTransferServiceTranslations[selectedLanguage] || moneyTransferServiceTranslations["UA"];

    return (
        <div className={styles.container}>
            <CollapsibleText
                title={t.title}
                text={t.text}
                description={t.description}
                maxLength={100}
            />
        </div>
    );
}

export default MoneyTransferService;
