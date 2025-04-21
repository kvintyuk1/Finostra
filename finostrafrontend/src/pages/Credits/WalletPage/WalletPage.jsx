import React, { useContext } from "react";
import styles from "./walletPage.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import FinanceTabs from "../../../components/FinanceTabs/FinanceTabs";
import CardUniversalOptions from "../../../components/CardUniversalOptions/CardUniversalOptions";
import { LanguageContext } from "../../../components/LanguageContext";
import { walletPageTranslations } from "./walletPageTranslations"; 

function WalletPage() {
    const { selectedLanguage } = useContext(LanguageContext);  
    const t = walletPageTranslations[selectedLanguage];  

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_walletPage}>
                <TransferToCardInfo
                    img="wallet"
                    title={t.title}  
                    subtitle={t.subtitle} 
                />
                <div className={styles.wrapper_two_components}>
                    <FinanceTabs />
                    <CardUniversalOptions />
                </div>
            </div>
        </div>
    );
}

export default WalletPage;
