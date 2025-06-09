import React, { useContext } from "react";
import styles from "./cardInfo.module.css";
import { LanguageContext } from "../../LanguageContext";
import { cardInfoTranslations } from "./cardInfoTranslations";
import { maskCardNumber } from "../../../utils/maskCardNumber";

function CardInfo({
  titleCard,
  totalMoney,
  colorText = "colorWhite",
  widthContainer = "width209",
  heightContainer = "height73",
  img = "circle",
  marginMoney = "margin5",
  cardNumber = "1234",
  accountNumber = "1010101",
  expiryDate,
  balance = { amount: "0.00", currency: "USD" }
}) {
  const { selectedLanguage } = useContext(LanguageContext);
  const t = cardInfoTranslations[selectedLanguage];

  const title = titleCard ?? t.title;
  const money = totalMoney ?? "0.00";

  let year = "--";
  let month = "--";

  if (expiryDate && typeof expiryDate === "string" && expiryDate.includes("-")) {
    const parts = expiryDate.split("-");
    if (parts.length >= 2) {
      year = parts[0];
      month = parts[1];
    }
  }

  return (
    <div
      className={`${styles.container} ${styles[widthContainer]} ${styles[heightContainer]} ${styles[colorText]}`}
    >
      <div className={styles.title_card}>{title}</div>
      <div className={styles.container_number}>
        <div className={styles.number}>CVV {cardNumber}</div>
        <div className={styles.vertical_line}></div>
        <div className={styles.number}>
          Expiry date: {expiryDate || `${month}/${year.slice(2)}`}
        </div>
      </div>
      <div className={`${styles.money} ${styles[marginMoney]}`}>
        {balance.amount} {balance.currency}
      </div>
    </div>
  );
}

export default CardInfo;
