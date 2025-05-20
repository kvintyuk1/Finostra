import React, {useState, useContext} from "react";
import styles from "./transactionToCard.module.css";
import SWIFT from "../SWIFT/SWIFT";
import InternationalTransfers from "../InternationalTransfers/InternationalTransfers";
import Details from "../Details/Details";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import ConfirmedSendReceiveCards from "../../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../../components/ListTotalAmount/ListTotalAmount";
import SendReceiveCards from "../../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../../components/MoneyTransferService/MoneyTransferService";
import {LanguageContext} from "../../../components/LanguageContext";
import {transactionToCardTranslations} from "./transactionToCardTranslations";

function TransactionToCard() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    // Стан для карток і суми/коментаря
    const [senderCardNumber, setSenderCardNumber] = useState("");
    const [receiverCardNumber, setReceiverCardNumber] = useState("");
    const [sum, setSum] = useState("");
    const [comment, setComment] = useState("");

    // Локалізація
    const {selectedLanguage} = useContext(LanguageContext);
    const t = transactionToCardTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="card_white"
                title={t.title}
                subtitle={t.subtitle}
            />

            {isConfirmed ? (
                <>
                    <ConfirmedSendReceiveCards
                        setIsConfirmed={setIsConfirmed}
                        senderCardNumber={senderCardNumber}
                        setSenderCardNumber={setSenderCardNumber}
                        receiverCardNumber={receiverCardNumber}
                        setReceiverCardNumber={setReceiverCardNumber}
                        sum={sum}
                        setSum={setSum}
                    />
                    <ListTotalAmount/>
                </>
            ) : (
                <>
                    <SendReceiveCards
                        setIsConfirmed={setIsConfirmed}
                        senderCardNumber={senderCardNumber}
                        setSenderCardNumber={setSenderCardNumber}
                        receiverCardNumber={receiverCardNumber}
                        setReceiverCardNumber={setReceiverCardNumber}
                        sum={sum}
                        setSum={setSum}
                        comment={comment}
                        setComment={setComment}
                    />
                    <MoneyTransferService/>
                </>
            )}
        </div>
    );
}

export default TransactionToCard;
