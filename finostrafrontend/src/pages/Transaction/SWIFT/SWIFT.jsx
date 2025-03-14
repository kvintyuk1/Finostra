import React from "react";
import styles from "./swift.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import Requisites from "../../../components/Requisites/Requisites";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";

function SWIFT() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="swift"
                    title="SWIFT"
                    subtitle="SWIFT-платежі – це зручний спосіб переказу коштів за кордон з особистого або
              корпоративного рахунку на рахунок іншої фізичної чи юридичної особи. Детальніше"
                />
                <div className={styles.wrap_send_requisite}>
                    <Send/>
                    <Requisites/>
                </div>
                <ReportTransfer/>
            </div>
        </div>
    );
}

export default SWIFT;