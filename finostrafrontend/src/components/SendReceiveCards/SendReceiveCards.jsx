import React from "react";
import styles from "./sendReceiveCards.module.css";
import CardOfSender from "../CardOfSender/CardOfSender";
import CardOfReceive from "../CardOfReceiveSum/CardOfReceiveSum";
import CardOfReceiveSum from "../CardOfReceiveSum/CardOfReceiveSum";
import AddComment from "../AddComment/AddComment";

function SendReceiveCards() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.cards_comment}>
                    <div className={styles.wrapper_cards}>
                        <CardOfSender/>
                        <CardOfReceiveSum/>
                    </div>
                    <AddComment/>
                </div>
                <div className={styles.wrapper_termsBlock}>
                <span className={styles.color_grey}>Натискаючи кнопку “Перекази” Ви приймаєте
                <span className={styles.color_white}>умови користування сервісом</span></span>
                    <button className={styles.but_send}>Переказати</button>
                </div>
                <img src="./icons/tabler_message.svg"
                     className={styles.img_message} alt=""/>
            </div>

        </div>
    );
}

export default SendReceiveCards;