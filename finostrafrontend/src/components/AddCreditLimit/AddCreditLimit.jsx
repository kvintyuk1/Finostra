import React from "react";
import styles from "./addCreditLimit.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import Total_Sum from "../for card/Total_Sum/Total_Sum";

function AddCreditLimit({onlyNavigationButtons}) {
    if(onlyNavigationButtons){
        return (
            <div className={styles.wrapper_buttons}>
                <ButtonForCard
                    sizeButton="size_button112"
                    title_button="Назад"
                    backgroundButton="blackBackground"
                />
                <ButtonForCard
                    sizeButton="size_button98"
                    title_button="Далі"
                />
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <span className={styles.title}>Встановити кредитний ліміт?</span>
            <div className={styles.wrap_buttons}>
                <ButtonForCard
                    sizeButton="size_button52"
                    title_button="Так"
                />
                <ButtonForCard
                    sizeButton="size_button42"
                    title_button="Ні"
                    backgroundButton="blackBackground"
                />
            </div>
            <Total_Sum
                title_totalSum="Сума"
                totalSum="200 000"
                sizeTotalBlock="size217"
                currency="UAH"
                title_color="greyText"
                currencyColor="currencyColorWhite"
            />
            <div className={styles.wrapper_buttons}>
                <ButtonForCard
                    sizeButton="size_button112"
                    title_button="Назад"
                    backgroundButton="blackBackground"
                />
                <ButtonForCard
                    sizeButton="size_button98"
                    title_button="Далі"
                />
            </div>
        </div>
    );
}

export default AddCreditLimit;