import React from "react";
import styles from "./buyingPartsEasy.module.css";

const buyingEasyItem = [
    {title: "Отримайте картку", img: "buyingEasy", text: "Отримайте картку Finostra з кредитним лімітом"},
    {
        title: "Дізнайтеся свій ліміт",
        img: "ask_limit",
        text: "Дізнайтеся ліміт на покупки по сервісу ‘Оплата частинами'"
    },
    {title: "Купуйте вже - платіть потім!", img: "buy_now", text: "Купуйте товари миттєво, а розраховуйтеся потім"},
]

function BuyingPartsEasy() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Купувати частинами - просто!</div>
            <div className={styles.wrapper_info}>
                {
                    buyingEasyItem.map(({title,img,text},index)=> (
                        <div key={index} className={styles.wrapper_item}>
                            <div className={styles.title_item}>{title}</div>
                            <img src={`/img/${img}.png`} alt=""/>
                            <div className={styles.text}>{text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BuyingPartsEasy;