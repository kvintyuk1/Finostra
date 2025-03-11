import React from "react";
import styles from "./headerForCard.module.css";

function HeaderForCard({title,title_wallet,img,titleColor="pinkText", textTransform="normal"}) {
    return (
        <div className={styles.wrapper_title}>
            <div className={styles.title}>{title}</div>
            <div className={styles.my_wallet}>
                <span className={`${styles.title_wallet} ${styles[titleColor]} ${styles[textTransform]}`}>{title_wallet}</span>
                <img src={img} alt=""/>
            </div>
        </div>
    );
}

export default HeaderForCard;