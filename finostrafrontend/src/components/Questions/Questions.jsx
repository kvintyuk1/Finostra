import React from "react";
import styles from "./questions.module.css";

const questionItems = [
    {question: "Яка комісія за оплату комунальних послуг?", img: "arrow_down16"},
    {question: "Що робити, якщо я не підтвердив(-ла) платіж після додавання в кошик?", img: "arrow_down16"},
    {question: "Як сплатити штраф за порушення ПДР?", img: "arrow_down16"},
    {question: "Що робити, якщо картку загублено або вкрадено?", img: "arrow_down16"},
    {question: "Як оформити кредит або розстрочку?", img: "arrow_down16"},
    {question: "Як змінити ліміт на зняття готівки або платежі в інтернеті?", img: "arrow_down16"},
    {question: "Як оновити особисті дані (номер телефону, адресу)?", img: "arrow_down16"},
    {question: "Які умови депозитів та процентні ставки?", img: "arrow_down16"},
]

function Questions() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.title}>Поширені запитання</div>
                {
                    questionItems.map(({question,img},index)=> (
                        <div key={index} className={styles.wrapper_questions}>
                            <div className={styles.question_img}>
                                <span className={styles.question}>{question}</span>
                                <img src={`./icons/${img}.svg`} alt=""/>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Questions;