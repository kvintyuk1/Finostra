import React from "react";
import styles from "./cardUniversal.module.css";
import CardInfo from "../for card/CardInfo/CardInfo";

function CardUniversal() {
    return (
        <div className={styles.wrapper_card}>
            <div className={styles.wrap_part_card}>
                <div className={styles.wrapper_item}>
                    <div className={styles.wrap_cardInfo}>
                        <CardInfo
                            widthContainer="width170"
                            heightContainer="height133"
                            colorText="colorBlack"
                            img="circle_black"
                            marginMoney="margin50"
                        />
                    </div>
                    <img src="/img/star_pink85.png" className={styles.img_star_pink} alt=""/>
                    <div className={styles.wrapper_img}>
                        <img src="/img/magnet_card.png" className={styles.img_magnet} alt=""/>
                        <img src="/icons/visa.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUniversal;