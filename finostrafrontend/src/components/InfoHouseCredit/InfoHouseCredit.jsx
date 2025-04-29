import React from "react";
import styles from "./infoHouseCredit.module.css";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import CreditTerms from "../CreditTerms/CreditTerms";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

const houseCreditItems = [
    {number: "1", name: "Розрахуйте бажану іпотеку"},
    {number: "2", name: "Заповніть анкету"},
    {number: "3", name: "Отримайте рішення"},
]

function InfoHouseCredit() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <SentReceivedSwitch
                    text_but_one="Оформлення"
                    text_but_two="Моя іпотека"
                    widthContainer="width228"
                />
                <div className={styles.wrap_info}>
                    <span
                        className={styles.title}>Живіть у комфорті вже сьогодні, виплачуючи іпотеку за ціною оренди</span>
                    <div className={styles.wrapper_buttons}>
                        {
                            houseCreditItems.map(({number, name}, index) => (
                                <div key={index} className={styles.wrap_item}>
                                    <button className={styles.button}>{number}</button>
                                    <span className={styles.name}>{name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className={styles.wrap_eOselja}>
                <div className={styles.wrap_itemEoselja}>
                    <div className={styles.wrap_logoOselja}>
                        <img src="/img/logoOselja.png" alt=""/>
                        <span className={styles.logoName}>єОселя</span>
                    </div>
                    <div className={styles.wrap_tabsCredit}>
                        <span className={styles.text}>Державна програма іпотечного кредитування</span>
                        <CreditTerms
                            widthWrapRate="widthRate95"
                            widthWrapRateTermLine="widthWrapRateTermLine250"
                            widthContainerCreditTerms="widthContainerCreditTerms345"
                            hideWrapperRateLine={false}
                            rate="Ставка"
                            ratePercent="3%"
                            prepayment="Аванс"
                            prepaymentPercent="Від 20%"
                            term="Термін"
                            termCredit="До 20 років"
                            sumCredit="Сума UAH "
                            numberCredit="До 4 000 000"
                        />
                    </div>
                </div>
                <div className={styles.wrap_buttons}>
                    <ButtonForCard
                        sizeButton="size_button188"
                        title_button="Детальні умови"
                        colorText="greyText"
                        backgroundButton="blackBackground"
                    />
                    <ButtonForCard
                        sizeButton="size_button188"
                        title_button="Розрахувати"
                    />
                </div>
            </div>
        </div>
    );
}

export default InfoHouseCredit;