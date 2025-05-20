import React, {useState} from "react";
import styles from "./cardUniversal.module.css";
import CardInfo from "../for card/CardInfo/CardInfo";

function CardUniversal({
                           sizeCard = "widthCard298", titleCard, totalMoney,
                           background_color = "background_colorYellow",
                           onClick, hideImg = true, hideLogo=false,paymentSystem,
                           cardNumber = "1234",accountNumber = "1010101"
                       }) {

    return (
        <div className={`${styles.wrapper_card} ${styles[background_color]} ${styles[sizeCard]}`}
             onClick={onClick}>
            <div className={styles.wrap_part_card}>
                <div className={styles.wrapper_item}>
                    <div className={styles.wrap_cardInfo}>
                        <CardInfo
                            titleCard={titleCard}
                            widthContainer="width170"
                            heightContainer="height133"
                            colorText="colorBlack"
                            img="circle_black"
                            marginMoney="margin50"
                            totalMoney={totalMoney}
                            hideImg={hideImg}
                            cardNumber={cardNumber}
                            accountNumber={accountNumber}
                        />
                    </div>
                    {!hideImg && (
                        <img src="/img/star_pink85.png" className={styles.img_star_pink} alt=""/>
                    )}
                    <div className={styles.wrapper_img} >
                        <img src="/img/magnet_card.png" className={styles.img_magnet} alt=""/>
                        {!hideLogo && paymentSystem === "visa" && (
                            <img src="/icons/visa.svg" alt=""/>
                        )}
                        {!hideLogo && paymentSystem === 'mastercard' && (
                            <img src="/icons/mastercardImg.svg" alt=""/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUniversal;