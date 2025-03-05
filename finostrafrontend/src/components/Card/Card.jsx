import React from "react";
import styles from "./card.module.css";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import NumberCard from "../for card/NumberCard/NumberCard";
import ValidityPeriod from "../for card/ValidityPeriod/ValidityPeriod";
import CW_kod from "../for card/CW_kod/CW_kod";

function Card({
                  title, title_wallet, img,titleColor, textTransform, title_card, placeholder, img_card, title_period, validityPeriod,
                  title_kod, cw_kod, img_kod, additionalComponent1, additionalComponent2}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_cardInfo}>
                <HeaderForCard
                    title={title} title_wallet={title_wallet} img={img} titleColor={titleColor} textTransform={textTransform}
                />
                <div className={styles.wrapper_cardInfo}>
                    <NumberCard
                        title_card={title_card} placeholder={placeholder} img_card={img_card}
                    />
                    <div className={styles.container_cardInfo}>
                        {
                            additionalComponent1 ? (additionalComponent1) : (
                                <div className={styles.card_info}>
                                    <ValidityPeriod
                                        title_period={title_period} validityPeriod={validityPeriod}
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