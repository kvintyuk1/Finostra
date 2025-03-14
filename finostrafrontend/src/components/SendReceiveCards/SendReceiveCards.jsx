import React from "react";
import styles from "./sendReceiveCards.module.css";
import CardOfReceiveSum from "../CardOfReceiveSum/CardOfReceiveSum";
import AddComment from "../AddComment/AddComment";
import Card from "../Card/Card";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function SendReceiveCards({setIsConfirmed}) {
    const handleTransferClick = ()=>{
        setIsConfirmed(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.cards_comment}>
                    <div className={styles.wrapper_cards}>
                        <Card
                            title="З картки"
                            title_wallet="Мій гаманець"
                            img="/icons/arrow_out_pink.svg"
                            title_card="Номер картки"
                            value="0000 0000 0000 0000"
                            img_card="/icons/card_white2.svg"
                            title_period="Термін дії"
                            validityPeriod="01 / 25"
                            title_kod="CW-kod"
                            cw_kod="***"
                            img_kod="/icons/information.svg"
                        />
                        <CardOfReceiveSum/>
                    </div>
                    <AddComment/>
                </div>
                <div className={styles.wrapper_termsBlock}>
                <span className={styles.color_grey}>Натискаючи кнопку “Перекази” Ви приймаєте
                <span className={styles.color_white}>умови користування сервісом</span></span>
                    <ButtonForCard
                        title_button="Переказати"
                        onClick={handleTransferClick}
                    />
                </div>
                <img src="/icons/tabler_message.svg"
                     className={styles.img_message} alt=""/>
            </div>
        </div>
    );
}

export default SendReceiveCards;