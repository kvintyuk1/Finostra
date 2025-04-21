import React, { useContext } from "react";
import styles from "./paymentInstallments.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Questions from "../../../components/Questions/Questions";
import BuyingPartsEasy from "../../../components/BuyingPartsEasy/BuyingPartsEasy";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";
import { LanguageContext } from "../../../components/LanguageContext";
import { paymentInstallmentsTranslations } from "./paymentInstallmentsTranslations";

function PaymentInstallments({ isDarkMode }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = paymentInstallmentsTranslations[selectedLanguage];

    return (
        <div className={`${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_payment}>
                    <TransferToCardInfo
                        img="payment_installments32"
                        title={t.title}
                        subtitle={t.subtitle}
                    />
                    <PaymentLimitInstallments />
                    <BuyingPartsEasy />
                    <Questions
                        sizeContent="height_content491"
                        sizeWrapper="height_wrap411"
                        questionsData={t.questions} 
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentInstallments;
