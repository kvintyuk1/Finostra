import React, {useState} from "react";
import styles from "./internationalTransfers.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Send from "../../../components/Send/Send";
import ReceiveTransfer from "../../../components/ReceiveTransfer/ReceiveTransfer";
import ReportTransfer from "../../../components/ReportTransfer/ReportTransfer";
import TransferDetails from "../../../components/TransferDetails/TransferDetails";

function InternationalTransfers() {
    const [isConfirmed,setIsConfirmed] = useState(false);
    const [isSum,setIsSum] = useState("");
    const [isCurrency,setIsCurrency] = useState("");
    const [isCountry,setIsCountry] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.interTransfers}>
                <TransferToCardInfo
                img="inter_transfer"
                title="Міжнародні перекази"
                subtitle="Western Union, MoneyGram, Ria та інші"
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
                                <ReceiveTransfer
                                    setIsConfirmed={setIsConfirmed}
                                />
                            </div>
                            <ReportTransfer
                                setIsConfirmed={setIsConfirmed}
                            />
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
                    )
                }
            </div>
        </div>
    );
}

export default InternationalTransfers;