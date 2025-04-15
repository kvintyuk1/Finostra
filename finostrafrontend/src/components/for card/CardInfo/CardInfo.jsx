import React from "react";
import styles from "./cardInfo.module.css";

function CardInfo({titleCard,totalMoney,colorText="colorWhite",widthContainer="width209",heightContainer="height73",img="circle",marginMoney="margin5"}) {
    return (
        <div className={`${styles.container} ${styles[widthContainer]} ${styles[heightContainer]} ${styles[colorText]}`}>
            <div className={styles.title_card}>{titleCard}</div>
            <div className={styles.container_number}>

                <img src={`/icons/${img}.svg`} alt=""/>
                <div className={styles.number}>1234</div>
                <div className={styles.vertical_line}></div>

                <div className={styles.UA}>UA92</div>
                <img src={`/icons/${img}.svg`} alt=""/>
                <div className={styles.number}>1010101</div>

            </div>
            <div className={`${styles.money} ${styles[marginMoney]}`}>{totalMoney} UAH</div>
        </div>
    );
}

export default CardInfo;