import React, {useState} from "react";
import styles from "./swift.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import Requisites from "../../../components/Requisites/Requisites";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import SendSWIFT from "../../../components/SendSWIFT/SendSWIFT";
import PaymentDetails from "../../../components/PaymentDetails/PaymentDetails";
import ConfirmationTransfer from "../../../components/ConfirmationTransfer/ConfirmationTransfer";

function SWIFT() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [showSendSwift, setShowSendSwift] = useState(false);
    const [commissionConfirmed, setCommissionConfirmed] = useState(false);
    const [isSum, setIsSum] = useState("");
    const [isCurrency, setIsCurrency] = useState("");
    const [isCountry, setIsCountry] = useState("");

    const handleBackToSend = ()=>{
        setShowSendSwift(false);
        setCommissionConfirmed(false);
    }

    return (

        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="swift"
                    title="SWIFT"
                    subtitle="SWIFT-платежі – це зручний спосіб переказу коштів за кордон з особистого або
                        корпоративного рахунку на рахунок іншої фізичної чи юридичної особи. Детальніше"
                />
                {!showSendSwift ? (
                    <>
                        {/*  <ConfirmationTransfer/> */}

                        <div className={styles.wrap_send_requisite}>
                            <Send
                                isConfirmed={isConfirmed}
                                setIsConfirmed={() => setShowSendSwift(true)}
                                isSum={isSum}
                                setIsSum={setIsSum}
                                isCurrency={isCurrency}
                                setIsCurrency={setIsCurrency}
                                isCountry={isCountry}
                                setIsCountry={setIsCountry}
                            />
                            <Requisites/>
                        </div>
                        <ReportTransfer/>
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
                        {commissionConfirmed &&  <PaymentDetails/>}
                    </>
                )}
            </div>
        </div>
    );
}

export default SWIFT;