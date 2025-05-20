import React from "react";
import styles from "./paymentSystem.module.css";
import CardUniversal from "../CardUniversal/CardUniversal";
import {maskCardNumber} from "../../utils/maskCardNumber";

function PaymentSystem({
                           onSelectCard, selectedCard, selectedPaymentSystem, onSelectPaymentSystem,
                           selectedShowActive, onSelectShowActive,selectedType
                       }) {

    const getCardNumber = ()=>{
        if(selectedType === "Дебетова"){
            if(selectedPaymentSystem === "visa") return "4441 2236 5675 1234";
            if(selectedPaymentSystem === "mastercard") return "4441 2334 3121 5678";
        }
        return "1234";
    };
    const cardNumber = maskCardNumber(getCardNumber());

    return (
        <div className={styles.container}>
            <div className={styles.title}>Платіжна система</div>
            <div className={styles.wrap_typeCard}>
                <button className={`${styles.button} ${selectedShowActive === "visa" ? styles.active : ""}`}
                        onClick={() => {
                            onSelectPaymentSystem("visa");
                            onSelectShowActive("visa");
                        }}>
                    <img src="/icons/visa_logo.svg" alt=""/>
                </button>
                <button className={`${styles.button} ${selectedShowActive === "mastercard" ? styles.active : ""}`}
                        onClick={() => {
                            onSelectPaymentSystem("mastercard");
                            onSelectShowActive("mastercard");
                        }}>
                    <img src="/icons/mastercard_logo.svg" alt=""/>
                </button>

            </div>
            <div className={styles.wrap_cards}>
                <div onClick={() => onSelectCard("yellow")}
                     className={`${styles.card} ${selectedCard !== "yellow" ? styles.cardInactive : ""}`}
                >
                    <CardUniversal
                        titleCard="Універсальна"
                        totalMoney="2000000"
                        hideImg={true}
                        paymentSystem={selectedPaymentSystem}
                        cardNumber={cardNumber}
                    />
                </div>
                <div onClick={() => onSelectCard("pink")}
                     className={`${styles.card} ${selectedCard !== "pink" ? styles.cardInactive : ""}`}
                >
                    <CardUniversal
                        titleCard="Універсальна Gold"
                        background_color="background_colorPink"
                        totalMoney="2000000"
                        hideImg={true}
                        paymentSystem={selectedPaymentSystem}
                        cardNumber={cardNumber}
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentSystem;