import React, { useContext } from "react";
import styles from "./cardOfReceive.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import { LanguageContext } from "../LanguageContext";
import { cardOfReceiveTranslations } from "./cardOfReceiveTranslations";

function CardOfReceive({ receiverCardNumber, cardValid, onChange }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = cardOfReceiveTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <HeaderForCard
                title={t.receiverCard}
                title_wallet={t.myWallet}
                img="/icons/arrow_out_pink.svg"
            />
            <NumberCard
                title_card={t.cardNumber}
                value={receiverCardNumber}
                cardValid={cardValid}
                onChange={onChange}
            />
        </div>
    );
}

export default CardOfReceive;
