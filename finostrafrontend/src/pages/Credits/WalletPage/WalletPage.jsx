import React from "react";
import styles from "./walletPage.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import FinanceTabs from "../../../components/FinanceTabs/FinanceTabs";
import CardUniversalOptions from "../../../components/CardUniversalOptions/CardUniversalOptions";

function WalletPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_walletPage}>
                <TransferToCardInfo
                    img="wallet"
                    title="Гаманець"
                    subtitle="Перегляд виписок та інформації за рахунками"
                />
                <div className={styles.wrapper_two_components}>
                    <FinanceTabs/>
                    <CardUniversalOptions/>
                </div>
            </div>
        </div>
    );
}

export default WalletPage;