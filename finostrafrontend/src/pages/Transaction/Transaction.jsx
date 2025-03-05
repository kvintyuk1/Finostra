import React, {useState} from "react";
import styles from "./transaction.module.css";
import {useOutletContext} from "react-router-dom";
import TransferToCardInfo from "../../components/TransferToCardInfo/TransferToCardInfo";
import SendReceiveCards from "../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../components/MoneyTransferService/MoneyTransferService";
import ConfirmedSendReceiveCards from "../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../components/ListTotalAmount/ListTotalAmount";

function Transaction() {
    const {isDarkMode} = useOutletContext();
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
        <div className={styles.container}>
            <TransferToCardInfo/>
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
    )
}

export default Transaction;