import React from "react";
import styles from "./cardInfo.module.css";

function CardInfo({colorText="colorWhite",widthContainer="width209",heightContainer="height73",img="circle",marginMoney="margin5"}) {
    return (
        <div className={`${styles.container} ${styles[widthContainer]} ${styles[heightContainer]} ${styles[colorText]}`}>
            <div className={styles.title_card}>Картка Універсальна</div>
            <div className={styles.container_number}>

                <img src={`/icons/${img}.svg`} alt=""/>
                <div className={styles.number}>1234</div>
                <div className={styles.vertical_line}></div>

                <div className={styles.UA}>UA92</div>
                <img src={`/icons/${img}.svg`} alt=""/>
                <div className={styles.number}>1010101</div>

            </div>
            <div className={`${styles.money} ${styles[marginMoney]}`}>6345.00 UAH</div>
        </div>
    );
}

export default CardInfo;