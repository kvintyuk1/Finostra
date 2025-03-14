import React from "react";
import styles from "./receiveTransfer.module.css";

const receiveItems = [
    {img: "western", name: "WesternUnion"},
    {img: "money", name: "MoneyGram"},
    {img: "ria", name: "RIA"},
    {img: "welsend", name: "Welsend"},
    {img: "meest", name: "Meest"},
    {img: "inter", name: "IntelExpress"},
    {img: "finostra_logo", name: "Finostra"},
]

function ReceiveTransfer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>Отримати</div>
                    <div className={styles.subtitle}>Виберіть компанію для отримання міжнародного термінового переказу
                    </div>
                </div>
                <div className={styles.content}>
                    {
                        receiveItems.map(({img, name},index)=> (
                            <div key={index} className={styles.wrapper_item}>
                                <div className={styles.img_title}>
                                    <img src={`./img/${img}.png`} alt=""/>
                                    <div className={styles.name}>{name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default ReceiveTransfer;