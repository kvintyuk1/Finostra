import React, {useState} from "react";
import styles from "./transactions.module.css";
import {Outlet, useOutletContext} from "react-router-dom";
import TransferToCardInfo from "../../components/TransferToCardInfo/TransferToCardInfo";
import SendReceiveCards from "../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../components/MoneyTransferService/MoneyTransferService";
import ConfirmedSendReceiveCards from "../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../components/ListTotalAmount/ListTotalAmount";
import Details from "./Details/Details";
import InternationalTransfers from "./InternationalTransfers/InternationalTransfers";
import SWIFT from "./SWIFT/SWIFT";

function Transactions() {
    return (
     <div className={styles.container}>
         <Outlet/>
     </div>
    )
}

export default Transactions;