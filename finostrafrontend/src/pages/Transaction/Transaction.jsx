import React from "react";
import styles from "./transaction.module.css";
import {useOutletContext} from "react-router-dom";
import TransferToCardInfo from "../../components/TransferToCardInfo/TransferToCardInfo";
import SendReceiveCards from "../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../components/MoneyTransferService/MoneyTransferService";

function Transaction() {
    const {isDarkMode} = useOutletContext();

    return (
        <div className={styles.container}>
            <TransferToCardInfo/>
            <SendReceiveCards/>
            <MoneyTransferService/>
        </div>
    )
}

export default Transaction;