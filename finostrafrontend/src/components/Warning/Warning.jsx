import React, {useContext} from "react";
import styles from "./warning.module.css";
import CollapsibleText from "../CollapsibleText/CollapsibleText";
import {LanguageContext} from "../LanguageContext";
import {warningTranslations} from "./warningTranslations";

function Warning() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = warningTranslations[selectedLanguage] || warningTranslations["UA"];

    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <CollapsibleText
                    title={t.title}
                    text={t.text}
                    description={t.description}
                    maxLength={2}
                />
            </div>
        </div>
    );
}

export default Warning;