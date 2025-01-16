import React from "react";
import styles from "./cardAnotherBank.module.css";

function CardAnotherBank() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Картка іншого банку України та світу</span>
            </div>
            <div className={styles.info}>
                <img src="./img/anotherCard.jpg"/>;
                <div>Швидко оплачуйте своїми банківськими картками.</div>
                <img src="./img/star 3.jpg" className={styles.star}/>
            </div>
            <div className={styles.button}>
            <button>Додати картку</button>
            </div>
            <div className={styles.tab_message}>
                <img src="icons/tabler_message.svg" />
            </div>
        </div>
    )
}

export default CardAnotherBank;