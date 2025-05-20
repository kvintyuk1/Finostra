import React, {useContext} from "react";
import styles from "./cardInfo.module.css";
import {LanguageContext} from "../../LanguageContext";
import {cardInfoTranslations} from "./cardInfoTranslations";
import {maskCardNumber} from "../../../utils/maskCardNumber";

function CardInfo({
                      titleCard,
                      totalMoney,
                      colorText = "colorWhite",
                      widthContainer = "width209",
                      heightContainer = "height73",
                      img = "circle",
                      marginMoney = "margin5",
                      cardNumber = "1234",
                      accountNumber = "1010101"
                  }) {
    const {selectedLanguage} = useContext(LanguageContext);
    const t = cardInfoTranslations[selectedLanguage];

    const title = titleCard ?? t.title;
    const money = totalMoney ?? "0.00";

    return (
        <div
            className={`${styles.container} ${styles[widthContainer]} ${styles[heightContainer]} ${styles[colorText]}`}>
            <div className={styles.title_card}>{title}</div>
            <div className={styles.container_number}>
                <div className={styles.number}>{maskCardNumber(cardNumber)}</div>
                <div className={styles.vertical_line}></div>

                <div className={styles.UA}>UA92</div>
                <img src={`/icons/${img}.svg`} alt=""/>
                <div className={styles.number}>{accountNumber}</div>
            </div>
            <div className={`${styles.money} ${styles[marginMoney]}`}>{money} {t.currency}</div>
        </div>
    );
}

export default CardInfo;