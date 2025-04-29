import React from "react";
import styles from "./confirmationTransfer.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import ToggleCommission from "../ToggleCommission/ToggleCommission";
import CardInfo from "../for card/CardInfo/CardInfo";
import Checkbox from "../Checkbox/Checkbox";

function ConfirmationTransfer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.title}>Підтвердження</div>
                <div className={styles.wrap_block_confirm}>
                    <div className={styles.wrap_card}>
                        <div className={styles.wrap_card_item}>
                            <div className={styles.wrap_block_item}>
                                <div className={styles.wrap_card_img}>
                                    <img src="/img/finostra_card.jpg" alt=""/>
                                    <CardInfo
                                        titleCard="Картка Універсальна"
                                        totalMoney="6345.00"
                                    />
                                </div>
                                <img src="/icons/arrow_down16.svg" alt=""/>
                            </div>
                        </div>
                        <div className={styles.wrap_sum_com_country}>
                            <div className={styles.wrap_transfer_sum}>
                                <div className={styles.title_transfer}>Сума переказу</div>
                                <div className={styles.item_transfer}>20 USD</div>
                            </div>
                            <div className={styles.wrap_transfer_commission}>
                                <div className={styles.title_transfer}>Комісія</div>
                                <div className={styles.item_transfer}>12.12 USD</div>
                            </div>
                            <div className={styles.wrap_transfer_country}>
                                <div className={styles.title_transfer}>Країна</div>
                                <div className={styles.item_transfer}>Грузія</div>
                            </div>
                        </div>
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
                                            <div className={styles.wrap_title_desc}>
                                                <div className={styles.title_switch}>Сплатити комісію “12.12 USD /
                                                    502.07 UAH” з іншої картки.
                                                </div>
                                                <div className={styles.desc_switch}>Курс конвертації: 1 USD = 41.4228
                                                    UAH
                                                </div>
                                            </div>
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
                                <Checkbox/>
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