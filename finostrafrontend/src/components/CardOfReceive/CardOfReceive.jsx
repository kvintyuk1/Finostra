import React from "react";
import styles from "./cardOfReceive.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";

function CardOfReceive() {
    return (
        <div className={styles.container}>
         <HeaderForCard
         title="Картка отримувача"
         title_wallet="Мій гаманець"
         img="./icons/arrow_out_pink.svg"
         />
         <NumberCard/>
        </div>
    );
}

export default CardOfReceive;