import React, {useState} from "react";
import styles from "./creditCar.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Questions from "../../../components/Questions/Questions";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";
import LimitFilter from "../../../components/LimitFilter/LimitFilter";

const questionsData5 = [
    {question: "Що потрібно для оформлення послуги «Авто в кредит»?", img: "arrow_down16"},
    {question: "Як відбувається процедура оформлення кредиту?", img: "arrow_down16"},
    {question: "Чи будуть нотаріально підписані документи на оформлення?", img: "arrow_down16"},
    {question: "Чи може інша людина погасити мою заборгованість?", img: "arrow_down16"},
    {question: "Як відбувається дострокове погашення? Чи можна погасити договір достроково?", img: "arrow_down16"},
    {question: "Чи можу я виїжджати машиною за межі України, якщо кредит ще не виплачено?", img: "arrow_down16"},
];
const infoCreditData2 = [
    {title:"Разова комісія",number:"0 UAH"},
    {title:"Ставка за кредитом",number:"18.00%"},
    {title:"Щомісячний платіж",number:"2859.32 UAH"},
]

function CreditCar() {
    const [active, setActive] = useState("but_one");
    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="car32"
                title="Авто в кредит"
                subtitle="Стежте за залишком, умовами та сплачуйте кредити зручно."
            />
            <PaymentLimitInstallments
                text_but_one="Оформлення"
                text_but_two="Договори"
                widthContainer="width211"
                title_info="Не вистачає на автомобіль? Оформіть “Авто в кредит”!"
                heightContainer="height594"
                rate="Річна ставка"
                ratePercent="від 0.01%"
                term="Строк кредиту"
                termCredit="До 5 років"
                hideAvailableLimit={true}
                hideButton={true}
                hideLineVerticalDotted={true}
                widthPay="widthPayNow421"
                gapPayNow="gapPayNow0"
                widthWrapperInfo="widthWrapperInfo421"
                heightWrapperInfo="heightWrapperInfo487"
                gapContainer="gap251"
                widthWrapRate="widthRate95"
                showSumCredit={true}
                infoCreditData={infoCreditData2}
                hideInfoSumCredit={false}
                hideInfoTermCredit={true}
                name="Вартість авто"
                info="150 000"
                name2="Ваш аванс"
                info2="38 000"
                heightSumCreditContainer="height421"
                heightWrapSumCredit="heightWrap272"
                marginContainer="marginTop66"
                sizeButton="size_button193"
                title_button="Подати заявку"
                min
                max
                initialValue
                leftLabel
                rightLabel
                customLabel
                customContent={
                    <div className={styles.wrapper_content}>
                        <div className={styles.wrapper_buttons}>
                            <button
                                className={`${styles.but_one} ${active === "but_one" ? styles.active : styles.inactive}`}
                                onClick={() => setActive("but_one")}
                            >З пробігом
                            </button>
                            <button
                                className={`${styles.but_two} ${active === "but_two" ? styles.active : styles.inactive}`}
                                onClick={() => setActive("but_two")}
                            >Нове
                            </button>

                        </div>
                        <div className={styles.wrapper_limitFilter}>
                            <LimitFilter
                                    min="150000"
                                    max="1500000"
                                    initialValue="150000"
                                    leftLabel="150 000"
                                    rightLabel="1 500 000"
                                    customLabel="Вартість авто"
                                    hideRightLabel={true}
                                    hideLabelSuffix={false}
                                    showMinMaxBelow={true}
                                    sizeLimit="widthLimit72"
                            />
                            <LimitFilter
                                min="38000"
                                max="50000"
                                initialValue="38000"
                                leftLabel="15 000"
                                rightLabel="50 000"
                                customLabel="Ваш аванс"
                                hideRightLabel={true}
                                hideLabelSuffix={false}
                                showMinMaxBelow={true}
                                sizeLimit="widthLimit72"
                            />
                        </div>
                    </div>
                }
            />
            <Questions
                sizeContent="height_content491"
                sizeWrapper="height_wrap411"
                questionsData={questionsData5}
            />
        </div>
    );
}

export default CreditCar;