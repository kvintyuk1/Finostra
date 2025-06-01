import React from "react";
import styles from "./buyingPartsEasy.module.css";

function BuyingPartsEasy({containerTitle,items,hideTitle=false}) {

    return (
        <div className={styles.container}>
            <div className={styles.title}>{containerTitle}</div>
            <div className={styles.wrapper_info}>
                {items.map(({ title, img, text }, index) => (
                    <div key={index} className={styles.wrapper_item}>
                        {!hideTitle && (
                            <div className={styles.title_item}>{title}</div>
                        )}
                        <img src={`/img/${img}.png`} alt=""/>
                        <div className={styles.text}>{text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuyingPartsEasy;
