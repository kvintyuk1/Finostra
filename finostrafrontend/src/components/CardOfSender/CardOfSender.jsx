import React from "react";
import styles from "./cardOfSender.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import ValidityPeriod from "../for card/ValidityPeriod/ValidityPeriod";
import CW_kod from "../for card/CW_kod/CW_kod";

function CardOfSender() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_senderInfo}>
                <HeaderForCard
                    title="З картки"
                    title_wallet="Мій гаманець"
                    img="./icons/arrow_out_pink.svg"
                />
                <div className={styles.wrapper_cardInfo}>
                    <NumberCard/>
                    <div className={styles.container_cardInfo}>
                        <ValidityPeriod/>
                        <CW_kod/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CardOfSender;