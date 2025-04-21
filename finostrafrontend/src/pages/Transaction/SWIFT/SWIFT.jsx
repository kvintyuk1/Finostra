import React, { useContext } from "react";
import styles from "./swift.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import Requisites from "../../../components/Requisites/Requisites";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import { LanguageContext } from "../../../components/LanguageContext";
import { swiftTranslations } from "./swiftTranslations";

function SWIFT() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = swiftTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="swift"
                    title={t.title}
                    subtitle={t.subtitle}
                />
                <div className={styles.wrap_send_requisite}>
                    <Send />
                    <Requisites />
                </div>
                <ReportTransfer />
            </div>
        </div>
    );
}

export default SWIFT;
