import React, {useState} from "react";
import styles from "./sendSWIFT.module.css";
import SendTransfer from "../SendTransfer/SendTransfer";
import TransferData from "../TransferData/TransferData";
import CommissionType from "../CommissionType/CommissionType";
import PaymentDetails from "../PaymentDetails/PaymentDetails";

function SendSWIFT({isSum, isCurrency, isCountry, isConfirmed, setIsConfirmed,handleBack}) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className={`${styles.container} ${isConfirmed ? styles.containerCompact : ""}`}>
            <div className={`${styles.wrap_content} ${isConfirmed ? styles.contentCompact : ""}`}>
                <SendTransfer/>
                <div className={styles.wrapper_transferData}>
                    <TransferData
                        isSum={isSum}
                        isCurrency={isCurrency}
                        isCountry={isCountry}
                    />
                    <CommissionType
                        setIsConfirmed={setIsConfirmed}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        readOnly={isConfirmed}
                        handleBack={handleBack}
                    />
                </div>
            </div>
        </div>
    );
}

export default SendSWIFT;