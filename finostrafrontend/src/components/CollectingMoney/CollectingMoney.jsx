import React from "react";
import styles from "./collectingMoney.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import Period from "../Period/Period";

function CollectingMoney({setShowKonvert}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_languages_button}>
                <ButtonForCard
                    title_button="UAH"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
                <ButtonForCard
                    title_button="USD"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
                <ButtonForCard
                    title_button="EUR"
                    sizeButton="size_button68"
                    fontWeight="fontWeight400"
                />
            </div>
            <div className={styles.wrapper_content}>
                <div className={styles.wrap_name}>
                    <div className={styles.wrap_title}>
                        <div className={styles.title}>Назва</div>
                        <input type="text" className={styles.input} placeholder="Виберіть або напишіть назву"/>
                    </div>
                    <div className={styles.count}>0/45</div>
                </div>
                <div className={styles.wrap_sum_money_collected}>
                    <div className={styles.wrap_sum_input}>
                        <div className={styles.title_collected}>Сума збору</div>
                        <input type="number" className={styles.input_sum} placeholder="00.00"/>
                    </div>
                    <div className={styles.wrap_info_collected}>
                        <div className={styles.info_collected}>
                            <img src="/icons/info_percent24.svg" alt=""/>
                            <div className={styles.title_info}>Після досягнення суми збору</div>
                        </div>
                        <div className={styles.description_info}>Ви можете продовжити накопичення або</div>
                        <div className={styles.description_info}>Вивести кошти з Конверта</div>
                    </div>
                </div>
                <div className={styles.wrap_additionally}>
                    <div className={styles.title_additionally}>Додатково</div>
                    <div className={styles.wrap_description}>
                        <div className={styles.title_description}>Опис</div>
                        <input type="text" className={styles.input} placeholder="Напишіть опис"/>
                        <div className={styles.count}>0/300</div>
                    </div>
                </div>
                <div className={styles.wrap_date_finish}>
                    <div className={styles.wrap_data_input}>
                        <div className={styles.title_data}>Дата закінчення збору</div>
                        <Period
                            iconPosition="right"
                            sizePeriod="size447"
                            placeholder="Виберіть дату"
                        />
                    </div>
                    <div className={styles.wrap_data_buttons}>
                        <ButtonForCard
                            title_button="Місяць"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                        <ButtonForCard
                            title_button="Пів року"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                        <ButtonForCard
                            title_button="Рік"
                            fontWeight="fontWeight400"
                            sizeButton="size_button68"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.wrap_buttons}>
                <ButtonForCard
                    title_button="Назад"
                    sizeButton="size_button88"
                    onClick={()=>setShowKonvert(true)}
                />
                <ButtonForCard
                    title_button="Продовжити"
                    sizeButton="size_button128_39"
                />
            </div>
        </div>
    );
}

export default CollectingMoney;