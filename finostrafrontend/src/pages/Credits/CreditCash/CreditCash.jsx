import React, {useState} from "react";
import styles from "./creditCash.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";
import Questions from "../../../components/Questions/Questions";

const questionsData4 = [
    {question:"Що таке «Кредит готівкою»?",img:"arrow_down16"},
    {question:"На яку картку зараховуються кошти?",img:"arrow_down16"},
    {question:"Які умови дострокового погашення «Кредиту готівкою»?",img:"arrow_down16"},
    {question:"Як погасити договір «Кредит готівкою»?",img:"arrow_down16"},
    {question:"Коли необхідно вносити кошти на рахунок для погашення кредиту?",img:"arrow_down16"},
    {question:"Чи буде списуватися комісія під час внесення коштів на рахунок для погашення кредиту?",img:"arrow_down16"},
];
const infoCreditData1 = [
    {title:"Середня денна процентна ставка",number:"0.05%"},
    {title:"Щомісячний платіж",number:"648.49 UAH"},
]

function CreditCash({isDarkMode}) {
    const [activeButton, setActiveButton] = useState("sent");
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <TransferToCardInfo
                    img="credit_cash32"
                    title="Кредит готівкою"
                    subtitle="Стежте за залишком, умовами та сплачуйте кредити зручно."
                />
                <PaymentLimitInstallments
                    text_but_one="Оформлення"
                    text_but_two="Договори"
                    widthContainer="width211"
                    sizeGap="gap58"
                    title_info="Кредит готівкою на картку"
                    description_info="Отримайте до 300 000 грн на будь-які потреби і знімайте без комісії"
                    replaceCreditTermsWithLimit={true}
                    hideButton={true}
                    showLimitFilter={true}
                    showSumCredit={true}
                    hideInfoSumCredit={true}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    name="Сума кредиту"
                    info="15 000"
                    sizeButton="size_button184"
                    title_button="Оформити"
                    limitFilterProps={{
                        min: 20000,
                        max: 500000,
                        initialValue: 15000,
                        leftLabel: "20 000",
                        rightLabel: "500 000",
                        customLabel: "Сума",
                        hideRightLabel: true,
                        hideLabelSuffix: true,
                        hideFilterLabelSuffix: false
                    }}
                    hideImg={false}
                    infoCreditData={infoCreditData1}
                />
                <Questions
                    sizeContent="height_content491"
                    sizeWrapper="height_wrap411"
                    questionsData={questionsData4}
                />
            </div>
        </div>
    );
}

export default CreditCash;