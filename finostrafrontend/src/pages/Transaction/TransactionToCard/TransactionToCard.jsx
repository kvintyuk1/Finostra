import React, {useState} from "react";
import styles from "./transactionToCard.module.css";
import SWIFT from "../SWIFT/SWIFT";
import InternationalTransfers from "../InternationalTransfers/InternationalTransfers";
import Details from "../Details/Details";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import ConfirmedSendReceiveCards from "../../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../../components/ListTotalAmount/ListTotalAmount";
import SendReceiveCards from "../../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../../components/MoneyTransferService/MoneyTransferService";
import {useOutletContext} from "react-router-dom";

function TransactionToCard() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [senderCardNumber,setSenderCardNumber] = useState("");
    const [receiverCardNumber,setReceiverCardNumber] = useState("");
    const [sum,setSum] = useState("");
    const [comment,setComment] = useState("");

    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="card_white"
                title="Переказ на картку"
                subtitle="Переказ між власними рахунками, а також на картки VISA/MasterCard українських та
                     іноземних банків."
            />
            {
                isConfirmed ? (
                    <>
                        <ConfirmedSendReceiveCards
                            setIsConfirmed={setIsConfirmed}
                            senderCardNumber={senderCardNumber}
                            receiverCardNumber={receiverCardNumber}
                            sum={sum}
                            comment={comment}
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