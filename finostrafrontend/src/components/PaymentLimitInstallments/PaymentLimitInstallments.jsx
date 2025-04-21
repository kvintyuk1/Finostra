import React, { useContext } from "react";
import styles from "./paymentLimitInstallments.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import CreditTerms from "../CreditTerms/CreditTerms";
import CardUniversal from "../CardUniversal/CardUniversal";
import { LanguageContext } from "../LanguageContext";
import { paymentLimitInstallmentsTranslations } from "./paymentLimitInstallmentsTranslations";

function PaymentLimitInstallments() {
    const { language } = useContext(LanguageContext);
    const t = paymentLimitInstallmentsTranslations[language] || paymentLimitInstallmentsTranslations["UA"];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_howUsePayment}>
                    <SentReceivedSwitch
                        text_but_one={t.howUse}
                        text_but_two={t.contracts}
                    />
                    <div className={styles.wrapper_payNow}>
                        <div className={styles.wrapper_title_description}>
                            <div className={styles.title}>{t.title}</div>
                            <div className={styles.description}>{t.description}</div>
                        </div>
                        <CreditTerms />
                    </div>
                </div>
                <div className={styles.wrapper_availableLimit}>
                    <div className={styles.wrapper_limit}>
                        <span className={styles.limit}>{t.availableLimit}</span>
                        <div className={styles.sum_limit}>
                            <span>{t.sumLimit}</span>
                            <span className={styles.color_text}>{t.totalLimit}</span>
                        </div>
                    </div>
                    <ButtonForCard
                        title_button={t.changeLimit}
                        sizeButton="size_button184"
                    />
                </div>
            </div>
            <div className={styles.wrapper_cards}>
                <div className={styles.wrapper_availableCards}>
                    <div className={styles.text}>{t.availableCards}</div>
                    <CardUniversal />
                </div>
                <span className={styles.wrapper_text}>
                    <span>{t.reminder}</span>
                    <span className={styles.text_info}>{t.infoText}</span>
                </span>
            </div>
        </div>
    );
}

export default PaymentLimitInstallments;
