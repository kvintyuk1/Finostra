import React from "react";
import styles from "./depositName.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function DepositName() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.wrap_description}>
                    <div className={styles.wrap_title_describe}>
                        <div className={styles.title}>Стандарт</div>
                        <div className={styles.describe}>Класичний вклад на вибраний строк з можливостю поповнення та
                            щомісячними %
                        </div>
                        <div className={styles.wrap_min_sum}>
                            <div className={styles.text_min_sun}>Мінімальна сума</div>
                            <div className={styles.number_min_sun}>2UAH</div>
                        </div>
                    </div>
                    <div className={styles.wrapper_download}>
                        <div className={styles.download}>Завантажити шаблон договору</div>
                        <div className={styles.download}>Детальніше про вклад</div>
                    </div>
                    <div className={styles.wrapper_bestseller}>
                        <img src="/icons/finostra_logo.svg" alt=""/>
                        <span className={styles.bestseller}>Лідер продажів</span>
                    </div>
                </div>
                <div className={styles.text1}>Так</div>
                <div className={styles.text2}>Щомісяця</div>
                <table className={styles.wrap_table}>

                </table>
                <div className={styles.wrapper_buttons}>
                    <ButtonForCard
                        title_button="Оформити"
                        sizeButton="size_button116"
                    />
                    <ButtonForCard
                        title_button="Оформити"
                        sizeButton="size_button116"
                    />
                    <ButtonForCard
                        title_button="Оформити"
                        sizeButton="size_button116"
                    />
                </div>
            </div>
        </div>
    );
}

export default DepositName;