import React, { useContext } from "react";
import styles from "./reportTransfer.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import { LanguageContext } from "../LanguageContext";
import { reportTransferTranslations } from "./reportTransferTranslations";

function ReportTransfer() {
    const { language } = useContext(LanguageContext);
    const t = reportTransferTranslations[language] || reportTransferTranslations["UA"];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_content}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.title}>{t.title}</div>
                        <SentReceivedSwitch text_but_one={t.sent} text_but_two={t.received} />
                    </div>
                    <table className={styles.wrapper_table}>
                        <thead className={styles.wrapper_header}>
                            <tr>
                                {t.tableHeaders.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.description}>{t.noTransfers}</div>
            </div>
            <ButtonForCard
                title_button={t.showPrevious}
                img="arrow_down16_grey"
                colorText="greyText"
                sizeButton="size_button375"
                backgroundButton="blackBackground"
                fontWeight="fontWeight400"
            />
        </div>
    );
}

export default ReportTransfer;
