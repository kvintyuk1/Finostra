import React, {useState} from "react";
import styles from "./openDeposit.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import CollapsibleText from "../../../components/CollapsibleText/CollapsibleText";
import MoneyTransferService from "../../../components/MoneyTransferService/MoneyTransferService";
import Warning from "../../../components/Warning/Warning";
import DepositTools from "../../../components/DepositTools/DepositTools";
import CurrencyName from "../../../components/CurrencyName/CurrencyName";
import DepositTopPanel from "../../../components/DepositTopPanel/DepositTopPanel";
import DepositName from "../../../components/DepositName/DepositName";

function OpenDeposit() {
    const [selectedDeposit,setSelectedDeposit] = useState("conditions");
    const [selectedCurrency,setSelectedCurrency] = useState("Гривня");
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <TransferToCardInfo
                    img="percent37"
                    title="Депозити"
                    subtitle="Керуйте своїми депозитами онлайн"
                />
                <Breadcrumbs/>
                <DepositTools
                    selectedDeposit={selectedDeposit}
                    setSelectedDeposit={setSelectedDeposit}
                />
                <CurrencyName
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                />
                <DepositTopPanel/>
                <DepositName/>

            </div>
            <Warning/>
        </div>
    );
}

export default OpenDeposit;