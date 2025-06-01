import React from "react";
import styles from "./serviceMoneyBox.module.css";
import AvailableCards from "../AvailableCards/AvailableCards";
import CreditTerms from "../CreditTerms/CreditTerms";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function ServiceMoneyBox() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.content}>
                    <div className={styles.title}>Послуга Скарбничка</div>
                    <CreditTerms
                        rate="Ставка"
                        ratePercent="75%"
                        term="Термін"
                        termCredit="12 міс"
                        sumCredit="Виплата %"
                        numberCredit="При поверненні"
                        prepayment="Дострокове зняття"
                        prepaymentPercent="Так"
                        hideWrapperRateLine={false}
                        hideLineVerticalDotted={false}
                        new_wrapper_rate_line="wrapper_rate_line3_9"
                        new_wrapper_rate_term="wrapper_rate_term10_53"
                    />
                </div>
                <div className={styles.wrap_pules_but}>
                    <div className={styles.wrap_rules}>
                        <img src="/icons/rules.svg" alt=""/>
                        <div className={styles.rules}>Умови та правила</div>
                    </div>
                    <ButtonForCard
                        title_button="Додати накопичення"
                        sizeButton="size_button208"
                    />
                </div>
            </div>
            <AvailableCards
                availableCards="Доступні картки"
                heightCard="height238"
            />
        </div>
    );
}

export default ServiceMoneyBox;