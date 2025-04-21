import React, { useContext } from "react";
import styles from "./infoAboutService.module.css";
import CollapsibleText from "../CollapsibleText/CollapsibleText";
import { LanguageContext } from "../LanguageContext";
import { infoAboutServiceTranslations } from "./infoAboutServiceTranslations";

function InfoAboutService() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tService = infoAboutServiceTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <CollapsibleText
                title={tService.title}
                text={tService.text}
                description={tService.description}
                maxLength={100}
            />
        </div>
    );
}

export default InfoAboutService;
