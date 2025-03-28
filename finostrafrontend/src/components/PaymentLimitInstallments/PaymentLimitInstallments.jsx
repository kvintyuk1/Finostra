import React from "react";
import styles from "./paymentLimitInstallments.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import CreditTerms from "../CreditTerms/CreditTerms";
import CardUniversal from "../CardUniversal/CardUniversal";

function PaymentLimitInstallments() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_howUsePayment}>
                    <SentReceivedSwitch
                        text_but_one="Як користуватись?"
                        text_but_two="Договори"
                    />
                    <div className={styles.wrapper_payNow}>
                        <div className={styles.wrapper_title_description}>
                            <div className={styles.title}>Купуйте зараз - платіть потім</div>
                            <div className={styles.description}>Послуга “Оплата частинами” від Finostra дозволяє робити
                                покупки на зручну кількість платежів
                            </div>
                        </div>
                        <CreditTerms/>
                    </div>

                </div>
                <div className={styles.wrapper_availableLimit}>
                    <div className={styles.wrapper_limit}>
                        <span className={styles.limit}>Доступний ліміт</span>
                        <div className={styles.sum_limit}>
                            <span>0 UAH</span>
                            <span className={styles.color_text}>з 300 000 UAH</span>
                        </div>
                    </div>
                    <ButtonForCard
                        title_button="Змінити ліміт"
                        sizeButton="size_button184"
                    />
                </div>
            </div>
            <div className={styles.wrapper_cards}>
                <div className={styles.wrapper_availableCards}>
                    <div className={styles.text}>Доступні картки (1)</div>
                    <CardUniversal/>
                </div>
                <span className={styles.wrapper_text}>
                    <span>Не забудь взяти картку з собою.</span>
                    <span className={styles.text_info}>Наявність картки необхідна при оформленні на касі і в магазині</span>
                </span>
            </div>
        </div>
    );
}

export default PaymentLimitInstallments;