import React, {useState} from "react";
import styles from "./card.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import ValidityPeriod from "../for card/ValidityPeriod/ValidityPeriod";
import CW_kod from "../for card/CW_kod/CW_kod";

function Card({
                  title, title_wallet, img,titleColor, textTransform, title_card, colorValue, img_card, title_period,
                  title_kod, cw_kod, img_kod, additionalComponent1, additionalComponent2}) {
    const [cardNumber,setCardNumber] = useState("");
    const [cardValid,setCardValid] = useState(true);
    const [cardPeriod,setCardPeriod] = useState("");

    const handleCardNumberChange = (e)=>{
        let rawValue = e.target.value.replace(/\D/g, ""); //Только цифры
        rawValue = rawValue.slice(0,16);
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim(); // Пробелы через каждые 4 цифры;
        setCardNumber(formattedValue);
        // Проверка Luhn
        const isValid = isValidCardNumber(rawValue);
        setCardValid(isValid);
    };

    // Функция Luhn
    const isValidCardNumber = (number) => {
        const digits = number.replace(/\s+/g, '').split('').reverse().map(Number);
        const sum = digits.reduce((acc, digit, idx) => {
            if (idx % 2 === 1) {
                let double = digit * 2;
                if (double > 9) double -= 9;
                return acc + double;
            }
            return acc + digit;
        }, 0);
        return sum % 10 === 0;
    };

    const handleCardPeriodChange = (e)=>{
        let periodValue = e.target.value.replace(/\D/g, "");
        periodValue = periodValue.slice(0,2);
        setCardPeriod(periodValue);
    };
    const isCardValid = cardNumber.replace(/\s/g, "").length === 16 && cardPeriod.length === 5;

    return (
        <div className={styles.container}>
            <div className={styles.wrap_cardInfo}>
                <HeaderForCard
                    title={title} title_wallet={title_wallet} img={img} titleColor={titleColor} textTransform={textTransform}
                />
                <div className={styles.wrapper_cardInfo}>
                    <NumberCard
                        title_card={title_card} colorValue={colorValue} img_card={img_card}
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        cardValid={cardValid}
                    />
                    <div className={styles.container_cardInfo}>
                        {
                            additionalComponent1 ? (additionalComponent1) : (
                                <div className={styles.card_info}>
                                    <ValidityPeriod
                                        title_period={title_period}
                                        value={cardPeriod}
                                        onChange={handleCardPeriodChange}
                                    />
                                    <CW_kod
                                        title_kod={title_kod}
                                        cw_kod={cw_kod}
                                        img_kod={img_kod}
                                    />
                                </div>
                            )}
                        {additionalComponent2}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;