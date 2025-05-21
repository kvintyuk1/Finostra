import React, { useState, useContext } from "react";
import styles from "./swift.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import Requisites from "../../../components/Requisites/Requisites";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import SendSWIFT from "../../../components/SendSWIFT/SendSWIFT";
import PaymentDetails from "../../../components/PaymentDetails/PaymentDetails";
import { LanguageContext } from "../../../components/LanguageContext";
import { swiftTranslations } from "./swiftTranslations";

function SWIFT() {
    // стани з фічі-гілки
    const [showSendSwift, setShowSendSwift] = useState(false);
    const [commissionConfirmed, setCommissionConfirmed] = useState(false);
    const [isSum, setIsSum] = useState("");
    const [isCurrency, setIsCurrency] = useState("");
    const [isCountry, setIsCountry] = useState("");
    const [activeButton, setActiveButton] = useState("sent");

    // локалізація
    const { selectedLanguage } = useContext(LanguageContext);
    const t = swiftTranslations[selectedLanguage];

    const handleBackToSend = () => {
        setShowSendSwift(false);
        setCommissionConfirmed(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="swift"
                    title={t.title}
                    subtitle={t.subtitle}
                />

                {!showSendSwift ? (
                    <>
                        <div className={styles.wrap_send_requisite}>
                            <Send
                                isConfirmed={showSendSwift}
                                setIsConfirmed={() => setShowSendSwift(true)}
                                isSum={isSum}
                                setIsSum={setIsSum}
                                isCurrency={isCurrency}
                                setIsCurrency={setIsCurrency}
                                isCountry={isCountry}
                                setIsCountry={setIsCountry}
                            />
                            <Requisites />
                        </div>
                        <ReportTransfer
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                        />
                    </>
                ) : (
                    <>
                        <SendSWIFT
                            isConfirmed={commissionConfirmed}
                            setIsConfirmed={setCommissionConfirmed}
                            isSum={isSum}
                            setIsSum={setIsSum}
                            isCurrency={isCurrency}
                            setIsCurrency={setIsCurrency}
                            isCountry={isCountry}
                            setIsCountry={setIsCountry}
                            handleBack={handleBackToSend}
                        />
                        {commissionConfirmed && <PaymentDetails />}
                    </>
                )}
            </div>
        </div>
    );
}

export default SWIFT;
