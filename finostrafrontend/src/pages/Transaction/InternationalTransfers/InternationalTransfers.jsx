import React, { useContext } from "react";
import styles from "./internationalTransfers.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import ReceiveTransfer from "../../../components/ReceiveTransfer/ReceiveTransfer";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import { LanguageContext } from "../../../components/LanguageContext";
import { internationalTransfersTranslations } from "./internationalTransfersTranslations";

function InternationalTransfers() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = internationalTransfersTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.interTransfers}>
                <TransferToCardInfo
                    img="inter_transfer"
                    title={t.transferTitle}
                    subtitle={t.transferSubtitle}
                />
                <div className={styles.wrap_send_receive}>
                    <Send />
                    <ReceiveTransfer />
                </div>
                <ReportTransfer />
            </div>
        </div>
    );
}

export default InternationalTransfers;
