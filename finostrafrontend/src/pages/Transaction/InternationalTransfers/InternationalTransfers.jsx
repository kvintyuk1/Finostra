import React from "react";
import styles from "./internationalTransfers.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import ReceiveTransfer from "../../../components/ReceiveTransfer/ReceiveTransfer";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";

function InternationalTransfers() {
    return (
        <div className={styles.container}>
            <div className={styles.interTransfers}>
                <TransferToCardInfo
                img="inter_transfer"
                title="Міжнародні перекази"
                subtitle="Western Union, MoneyGram, Ria та інші"
                />
                <div className={styles.wrap_send_receive}>
                    <Send/>
                    <ReceiveTransfer/>
                </div>
                <ReportTransfer/>

            </div>
        </div>
    );
}

export default InternationalTransfers;