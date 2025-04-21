import React, { useContext } from "react";
import styles from "./cardInfo.module.css";
import { LanguageContext } from "../../LanguageContext";
import { cardInfoTranslations } from "./cardInfoTranslations";

function CardInfo({
    colorText = "colorWhite",
    widthContainer = "width209",
    heightContainer = "height73",
    img = "circle",
    marginMoney = "margin5"
}) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = cardInfoTranslations[selectedLanguage];

    return (
        <div className={`${styles.container} ${styles[widthContainer]} ${styles[heightContainer]} ${styles[colorText]}`}>
            <div className={styles.title_card}>{t.title}</div>
            <div className={styles.container_number}>
                <img src={`/icons/${img}.svg`} alt="" />
                <div className={styles.number}>1234</div>
                <div className={styles.vertical_line}></div>

                <div className={styles.UA}>UA92</div>
                <img src={`/icons/${img}.svg`} alt="" />
                <div className={styles.number}>1010101</div>
            </div>
            <div className={`${styles.money} ${styles[marginMoney]}`}>6345.00 {t.currency}</div>
        </div>
    );
}

export default CardInfo;
