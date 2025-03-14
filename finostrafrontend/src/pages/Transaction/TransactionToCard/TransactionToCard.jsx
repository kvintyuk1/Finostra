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
                        <ConfirmedSendReceiveCards setIsConfirmed={setIsConfirmed}/>
                        <ListTotalAmount/>
                    </>
                ) : (
                    <>
                        <SendReceiveCards setIsConfirmed={setIsConfirmed}/>
                        <MoneyTransferService/>
                    </>
                )}

        </div>
    );
}

export default TransactionToCard;