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
    const [isConfirmed,setIsConfirmed] = useState(false);
    const [isSum,setIsSum] = useState("");
    const [isCurrency,setIsCurrency] = useState("");
    const [isCountry,setIsCountry] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="swift"
                    title="SWIFT"
                    subtitle="SWIFT-платежі – це зручний спосіб переказу коштів за кордон з особистого або
                        корпоративного рахунку на рахунок іншої фізичної чи юридичної особи. Детальніше"
                />
                {!isConfirmed ? (
                    <>
                        <ConfirmationTransfer/>
                        {/*
                         <div className={styles.wrap_send_requisite}>
                            <Send
                                setIsConfirmed={setIsConfirmed}
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
                        */}
                    </>
                ) : (
                    <SendSWIFT
                    setIsConfirmed={setIsConfirmed}
                    isSum={isSum}
                    setIsSum={setIsSum}
                    isCurrency={isCurrency}
                    setIsCurrency={setIsCurrency}
                    isCountry={isCountry}
                    setIsCountry={setIsCountry}
                    />
                )}
                <PaymentDetails/>
            </div>
        </div>
    );
}

export default SWIFT;