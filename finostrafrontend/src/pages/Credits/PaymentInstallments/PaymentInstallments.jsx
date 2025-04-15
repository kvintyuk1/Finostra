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
                    <PaymentLimitInstallments
                        text_but_one="Як користуватись?"
                        text_but_two="Договори"
                        widthContainer="width252"
                        title_info="Купуйте зараз - платіть потім"
                        description_info="Послуга “Оплата частинами” від Finostra дозволяє робити
                        покупки на зручну кількість платежів"
                        title="Доступні картки (1)"
                        showAvailableLimit={true}
                        rate="Процентна ставка"
                        ratePercent="19% на місяць"
                        term="Максимальний строк"
                        termCredit="До 24 міс."
                        sumCredit="Сума кредиту"
                        numberCredit="Від 300 до 300 000 UAH"
                        hideLineVerticalDotted
                        infoContent={
                            <>
                                <span>Не забудь взяти картку з собою.</span>
                                <span
                                    className={styles.text_info}>Наявність картки необхідна при оформленні на касі і в магазині
                        </span>
                            </>
                        }
                    />
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