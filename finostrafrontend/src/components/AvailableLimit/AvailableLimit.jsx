import React from "react";
import styles from "./availableLimit.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function AvailableLimit({hideButton = false,hideImg = true}) {
    return (
        <div className={styles.wrapper_availableLimit}>
            <div className={styles.wrapper_limit}>
                <span className={styles.limit}>
                    Доступний ліміт
                    {!hideImg && <img src="/icons/limit24.svg" alt=""/>}
                </span>
                <div className={styles.sum_limit}>
                    <span>0 UAH</span>
                    <span className={styles.color_text}>з 300 000 UAH</span>
                </div>
            </div>
            {!hideButton &&
                <ButtonForCard
                    title_button="Змінити ліміт"
                    sizeButton="size_button184"
                />}
        </div>
    );
}

export default AvailableLimit;