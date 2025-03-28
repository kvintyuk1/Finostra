import React from "react";
import styles from "./paymentInstallments.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Questions from "../../../components/Questions/Questions";
import BuyingPartsEasy from "../../../components/BuyingPartsEasy/BuyingPartsEasy";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";

const questionsData2 = [
    {question: "Чи можу я достроково погасити кредит?", img: "arrow_down16"},
    {question: "Через які канали можна достроково погасити договори за сервісом «Оплата частинами»?", img: "arrow_down16"},
    {question: "Який кредит вважається простроченим?", img: "arrow_down16"},
    {question: "Як дізнатися про суму простроченого платежу та реквізити для погашення?", img: "arrow_down16"},
    {question: "Як списуються платежі за схемою «Оплата частинами»?", img: "arrow_down16"},
    {question: "Які існують комісії за сервісом «Оплата частинами»?", img: "arrow_down16"},
]

function PaymentInstallments({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_payment}>
                    <TransferToCardInfo
                     img="payment_installments32"
                     title="Оплата частинами"
                     subtitle="Оплачуй частинами легко та зручно – без зайвих турбот."
                    />
                    <PaymentLimitInstallments/>
                    <BuyingPartsEasy/>
                    <Questions
                        sizeContent="height_content491"
                        sizeWrapper="height_wrap411"
                        questionsData={questionsData2}
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentInstallments;