import React from "react";
import styles from "./details.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Payment from "../../../components/Payment/Payment";
import Category from "../../../components/Category/Category";
import Questions from "../../../components/Questions/Questions";
import NewPayment from "../../../components/NewPayment/NewPayment";
const questionsData1 = [
    {question: "Яка комісія за оплату комунальних послуг?", img: "arrow_down16"},
    {question: "Що робити, якщо я не підтвердив(-ла) платіж після додавання в кошик?", img: "arrow_down16"},
    {question: "Як сплатити штраф за порушення ПДР?", img: "arrow_down16"},
    {question: "Що робити, якщо картку загублено або вкрадено?", img: "arrow_down16"},
    {question: "Як оформити кредит або розстрочку?", img: "arrow_down16"},
    {question: "Як змінити ліміт на зняття готівки або платежі в інтернеті?", img: "arrow_down16"},
    {question: "Як оновити особисті дані (номер телефону, адресу)?", img: "arrow_down16"},
    {question: "Які умови депозитів та процентні ставки?", img: "arrow_down16"},
]

function Details({isDarkMode}) {

    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.transactionWrapper}>
                    <TransferToCardInfo
                        img="card_payment"
                        title="Платежі"
                        subtitle="Не гайте часу в чергах і не переплачуйте за комісії."
                    />
                    <NewPayment isDarkMode={isDarkMode}/>
                    <Category/>
                </div>
                <Questions questionsData={questionsData1}/>
            </div>
        </div>
    );
}

export default Details;