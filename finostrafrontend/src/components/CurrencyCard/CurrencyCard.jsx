import React from "react";
import styles from "./currencyCard.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function CurrencyCard() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Валюта картки</div>
            <div className={styles.wrapper_buttons}>
             <ButtonForCard
             sizeButton="size_button56"
             title_button="UAH"
             />
             <ButtonForCard
             sizeButton="size_button57"
             title_button="USD"
             backgroundButton="blackBackground"
             />
             <ButtonForCard
             sizeButton="size_button54"
             title_button="EUR"
             backgroundButton="blackBackground"
             />
            </div>
        </div>
    );
}

export default CurrencyCard;