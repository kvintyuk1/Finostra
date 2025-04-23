import React from "react";
import styles from "./confirmationTransfer.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import ToggleCommission from "../ToggleCommission/ToggleCommission";

function ConfirmationTransfer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.title}>Підтвердження</div>
                <div className={styles.wrap_block_confirm}>
                    <div className={styles.wrap_card}>

                    </div>
                    <div className={styles.wrap_block}>
                        <div className={styles.wrap_item_block}>
                            <div className={styles.wrap_commission_sum}>
                                <div className={styles.wrap_item_transfer}>
                                    <div className={styles.wrap_commission}>
                                        <div className={styles.wrap_describe}>
                                            <img src="/icons/information.svg" alt=""/>
                                            <span className={styles.title_commission}>Комісія 3% у разі оплати за рахунок кредитного ліміту.</span>
                                        </div>
                                        <div className={styles.wrap_switch}>
                                          <ToggleCommission/>
                                        </div>
                                    </div>
                                    <div className={styles.wrap_sum_transfer}>
                                        <div className={styles.item_sum_transfer}>
                                            <div className={styles.item_sum}>
                                                <div className={styles.text}>Сума переказу</div>
                                                <div className={styles.number}>20 USD</div>
                                            </div>
                                            <div className={styles.item_rate}>
                                                <div className={styles.text}>Курс конвертації</div>
                                                <div className={styles.number}>1 USD = 41.6667</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.wrap_pay}>
                                    <span className={styles.pay}>До оплати: </span>
                                    <span className={styles.sum}>1 335.40 UAH</span>
                                </div>
                            </div>
                            <div className={styles.wrap_description}>
                                <img src="/icons/yes.svg" alt=""/>
                                <span className={styles.description}>
                                    Підтверджую, що платіж не пов’язаний з підприємницькою діяльністю, і
                                    реквізити зазначено правильно, а також уповноважую банк сформувати та
                                    підписати платіжну інструкцію від мого імені.
                                </span>
                            </div>
                        </div>
                        <div className={styles.wrap_buttons}>
                            <ButtonForCard
                                title_button="Назад"
                                sizeButton="size_button152"
                            />
                            <ButtonForCard
                                title_button="Оплатити"
                                sizeButton="size_button152"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationTransfer;