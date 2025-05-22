import React, {useRef, useState} from "react";
import styles from "./card.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import ValidityPeriod from "../for card/ValidityPeriod/ValidityPeriod";
import CW_kod from "../for card/CW_kod/CW_kod";
import {isValidCardNumber, isValidExpiry} from "../../utils/validateCard";

function Card({title, title_wallet, img,titleColor, textTransform, title_card, colorValue, img_card, title_period,
                  title_kod,cardPeriod,handleCardPeriodChange,isPeriodValid,periodInputRef, cw_kod,setCwKod, img_kod,
                  additionalComponent1, additionalComponent2,value,setValue,
                expiry, setExpiry}) {
    const [cardValid,setCardValid] = useState(true);
    const [periodTouched,setPeriodTouched] = useState(false);
    const cwInputRef = useRef(null);

    const handleCardNumberChange = (e)=>{
        let rawValue = e.target.value.replace(/\D/g, "");
        rawValue = rawValue.slice(0, 16);
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
        const isValid = isValidCardNumber(rawValue);
        setCardValid(isValid);
        setValue(formattedValue);
        if(isValid && formattedValue.length === 19){
            periodInputRef?.current?.focus();
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
                                        value={expiry}
                                        onChange={handleCardPeriodChange}
                                        isPeriodValid={isPeriodValid}
                                        nextRef={cwInputRef}
                                        touched={periodTouched}
                                        setTouched={setPeriodTouched}
                                        inputRef={periodInputRef}
                                    />
                                    <CW_kod
                                        title_kod={title_kod}
                                        cw_kod={cw_kod}
                                        setCwKod={setCwKod}
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