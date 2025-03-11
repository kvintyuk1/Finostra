import React, {useState} from "react";
import styles from "./transaction.module.css";
import {Outlet, useOutletContext} from "react-router-dom";
import TransferToCardInfo from "../../components/TransferToCardInfo/TransferToCardInfo";
import SendReceiveCards from "../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../components/MoneyTransferService/MoneyTransferService";
import ConfirmedSendReceiveCards from "../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../components/ListTotalAmount/ListTotalAmount";
import Details from "./Details/Details";

function Transaction() {
    const {isDarkMode} = useOutletContext();
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
        <div className={styles.container}>
            <Details/>
            {/*   <TransferToCardInfo
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
                )} */}

        </div>
    )
}

export default Transaction;