import React, {useState} from "react";
import styles from "./transferDetails.module.css";
import TranslationSystem from "../TranslationSystem/TranslationSystem";
import TransferData from "../TransferData/TransferData";
import ResolutionNBU from "../ResolutionNBU/ResolutionNBU";
import SendTransfer from "../SendTransfer/SendTransfer";

function TransferDetails({setIsConfirmed,isSum,setIsSum,isCurrency,setIsCurrency,isCountry,setIsCountry}) {
    const [isSend, setIsSend] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                {!isSend ? (
                    <>
                        <SendTransfer/>
                        <div className={styles.wrapper_transferData}>
                            <TransferData
                            isSum={isSum}
                            setIsSum={setIsSum}
                            isCurrency={isCurrency}
                            setIsCurrency={setIsCurrency}
                            isCountry={isCountry}
                            setIsCountry={setIsCountry}
                            />
                            <TranslationSystem
                                setIsConfirmed={setIsConfirmed}
                                setIsSend={setIsSend}
                            />
                        </div>
                    </>
                ) : (
                    <ResolutionNBU/>
                    )}
            </div>
        </div>
    );
}

export default TransferDetails;