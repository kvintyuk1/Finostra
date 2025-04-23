import React, {useRef, useState} from "react";
import styles from "./card.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import ValidityPeriod from "../for card/ValidityPeriod/ValidityPeriod";
import CW_kod from "../for card/CW_kod/CW_kod";
import {isValidCardNumber, isValidExpiry} from "../../utils/validateCard";

function Card({title, title_wallet, img,titleColor, textTransform, title_card, colorValue, img_card, title_period,
                  title_kod, cw_kod, img_kod, additionalComponent1, additionalComponent2,value,setValue}) {
    const [cardValid,setCardValid] = useState(true);
    const [cardPeriod,setCardPeriod] = useState("");
    const [periodValid,setPeriodValid] = useState(true);
    const cwInputRef = useRef(null);

    const handleCardNumberChange = (e)=>{
        let rawValue = e.target.value.replace(/\D/g, "");
        rawValue = rawValue.slice(0, 16);
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
        const isValid = isValidCardNumber(rawValue);
        setCardValid(isValid);
        // 👉 Передаём наружу через props
        setValue(formattedValue);
    };

    const handleCardPeriodChange = (e)=>{
        let input = e.target.value.replace(/[^\d]/g, "");
        if (input.length >= 3) {
            input = input.slice(0, 4);
            input = input.replace(/(\d{2})(\d{1,2})/, "$1/$2");
        }
        setCardPeriod(input);

        if (input.length === 5) {
            setPeriodValid(isValidExpiry(input));
            cwInputRef.current?.focus(); // 👉 автофокус
        } else {
            setPeriodValid(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrap_cardInfo}>
                <HeaderForCard
                    title={title} title_wallet={title_wallet} img={img} titleColor={titleColor} textTransform={textTransform}
                />
                <div className={styles.wrapper_cardInfo}>
                    <NumberCard
                        title_card={title_card} colorValue={colorValue} img_card={img_card}
                        value={value}
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
                                        periodValid={periodValid}
                                        nextRef={cwInputRef}
                                    />
                                    <CW_kod
                                        title_kod={title_kod}
                                        cw_kod={cw_kod}
                                        img_kod={img_kod}
                                        inputRef={cwInputRef}
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