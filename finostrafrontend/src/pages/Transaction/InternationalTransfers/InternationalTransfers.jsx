import React, { useState, useContext } from "react";
import styles from "./internationalTransfers.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import ReceiveTransfer from "../../../components/ReceiveTransfer/ReceiveTransfer";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import TransferDetails from "../../../components/TransferDetails/TransferDetails";
import { LanguageContext } from "../../../components/LanguageContext";
import { internationalTransfersTranslations } from "./internationalTransfersTranslations";

function InternationalTransfers() {
    // стани з фічі-гілки
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isSum, setIsSum] = useState("");
    const [isCurrency, setIsCurrency] = useState("");
    const [isCountry, setIsCountry] = useState("");

    // локалізація
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

                {!isConfirmed ? (
                    <>
                        <div className={styles.wrap_send_receive}>
                            <Send
                                setIsConfirmed={setIsConfirmed}
                                isSum={isSum}
                                setIsSum={setIsSum}
                                isCurrency={isCurrency}
                                setIsCurrency={setIsCurrency}
                                isCountry={isCountry}
                                setIsCountry={setIsCountry}
                            />
                            <ReceiveTransfer setIsConfirmed={setIsConfirmed} />
                        </div>
                        <ReportTransfer setIsConfirmed={setIsConfirmed} />
                    </>
                ) : (
                    <TransferDetails
                        setIsConfirmed={setIsConfirmed}
                        isSum={isSum}
                        setIsSum={setIsSum}
                        isCurrency={isCurrency}
                        setIsCurrency={setIsCurrency}
                        isCountry={isCountry}
                        setIsCountry={setIsCountry}
                    />
                )}
            </div>
        </div>
    );
}

export default InternationalTransfers;
