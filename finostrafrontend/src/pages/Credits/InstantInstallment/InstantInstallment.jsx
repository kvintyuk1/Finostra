import React, {useState} from "react";
import styles from "./instantInstallment.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import PaymentLimitInstallments from "../../../components/PaymentLimitInstallments/PaymentLimitInstallments";
import ButtonForCard from "../../../components/for card/ButtonForCard/ButtonForCard";
import BuyingPartsEasy from "../../../components/BuyingPartsEasy/BuyingPartsEasy";
import Questions from "../../../components/Questions/Questions";

const questionsData3 = [
    {question:"Що таке сервіс «Миттєва розстрочка» для покупців?",img:"arrow_down16"},
    {question:"Якою карткою можна оплатити покупку по сервісу «Миттєва розстрочка»?",img:"arrow_down16"},
    {question:"Як дізнатися доступний ліміт по сервісу «Миттєва розстрочка»?",img:"arrow_down16"},
    {question:"Чи можливо підвищити ліміт за сервісом «Миттєва розстрочка»?",img:"arrow_down16"},
    {question:"Які умови кредиту «Миттєва розстрочка» для споживачів?",img:"arrow_down16"},
    {question:"Які документи потрібні для оформлення кредиту «Миттєва розстрочка»?",img:"arrow_down16"}
]

function InstantInstallment({isDarkMode}) {
    const [activeButton, setActiveButton] = useState("sent");
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <TransferToCardInfo
                    img="timer"
                    title="Миттєва розстрочка "
                    subtitle="Миттєва розстрочка – зручний спосіб оплатити покупку без зайвих клопотів!"
                />
                <PaymentLimitInstallments
                    text_but_one="Як користуватись?"
                    text_but_two="Договори"
                    widthContainer="width252"
                    sizeGap="gap108"
                    title_info="Купуйте зараз - платіть потім"
                    description_info="Послуга “Миттєва розстрочка” від Finostra дозволяє робити покупки на зручну кількість платежів"
                    title={`Картка "Універсальна"`}
                    heightContainer="height477"
                    heightCard="height397"
                    showAvailableLimit={false}
                    rate="Процентна ставка"
                    ratePercent="0.01% на місяць"
                    term="Максимальний строк"
                    termCredit="До 24 міс."
                    sumCredit="Сума кредиту"
                    numberCredit="Від 300 до 300 000 UAH"
                    hideLineVerticalDotted
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    customContent={
                        <div className={styles.wrapper_item}>
                            <img src="/icons/card_white20.svg" alt=""/>
                            <div className={styles.info}>Потрібна лише карка Finostra</div>
                        </div>
                    }
                    infoContent={
                        <>
                            <div className={styles.wrapper_content}>
                                <div className={styles.wrapper_info}>
                                    <div className={styles.wrap_item}>
                                        <span className={styles.text}>Кредитний ліміт</span>
                                        <span className={styles.number}>до 200000 UAH</span>
                                    </div>
                                    <div className={styles.wrap_item}>
                                        <span className={styles.text}>Пільговий період</span>
                                        <span className={styles.number}>до 55 днів</span>
                                    </div>
                                </div>
                                <ButtonForCard
                                    title_button="Отримати картку"
                                    sizeButton="size_button184"/>
                            </div>
                        </>
                    }
                />
                <BuyingPartsEasy/>
                <Questions
                sizeContent="height_content491"
                sizeWrapper="height_wrap411"
                questionsData={questionsData3}
                />
            </div>
        </div>
    );
}

export default InstantInstallment;