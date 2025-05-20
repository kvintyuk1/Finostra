import React from "react";
import styles from "./depositName.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import ReusableTable from "../ReusableTable/ReusableTable";

function DepositName({
                         title, description, new_container = "height_container285",
                         new_wrapper_content = "height_wrapper_content225",
                         new_wrap_description = "height_wrap_description225",
                         new_gap_wrapper_content="gap_wrapper_content20",
                         new_width_wrap_description="width_wrap_description317",
                         new_describe_nowrap="describe_wrap",limit,show_table,
                         new_height_wrap_table, type, show = true, show_button = true,
                         show_wrapper_buttons = true,show_column = true
                     }) {
    return (
        <div className={`${styles.container} ${styles[new_container]}`}>
            <div className={`${styles.wrapper_content} ${styles[new_wrapper_content]} ${styles[new_gap_wrapper_content]}`}>
                <div className={`${styles.wrap_description} ${styles[new_wrap_description]} ${styles[new_width_wrap_description]}`}>
                    <div className={styles.wrap_title_describe}>
                        <div className={styles.title}>{title}</div>
                        <div className={`${styles.describe} ${styles[new_describe_nowrap]}`}>{description}</div>
                        <div className={styles.wrap_min_sum}>
                            <div className={styles.text_min_sun}>Мінімальна сума</div>
                            <div className={styles.number_min_sun}>2UAH</div>
                        </div>
                    </div>
                    <div className={styles.wrapper_download}>
                        <div className={styles.download}>Завантажити шаблон договору</div>
                        <div className={styles.download}>Детальніше про вклад</div>
                    </div>
                    {show &&
                        <div className={styles.wrapper_bestseller}>
                            <img src="/icons/finostra_logo.svg" alt=""/>
                            <span className={styles.bestseller}>Лідер продажів</span>
                        </div>}
                </div>
                {show_column && (
                    <>
                        <div className={styles.text1}>Так</div>
                        <div className={styles.text2}>Щомісяця</div>
                    </>
                )}
                <ReusableTable
                type={type}
                limit={limit}
                show_table={show_table}
                new_height_wrap_table={new_height_wrap_table}
                />

                {show_wrapper_buttons && (
                    <div className={styles.wrapper_buttons}>
                        <ButtonForCard
                            title_button="Оформити"
                            sizeButton="size_button111"
                        />
                        {show_button &&
                            <div className={styles.inner_buttons}>
                                <ButtonForCard
                                    title_button="Оформити"
                                    sizeButton="size_button111"
                                />
                                <ButtonForCard
                                    title_button="Оформити"
                                    sizeButton="size_button111"
                                />
                            </div>}
                    </div>
                )}

            </div>
        </div>
    );
}

export default DepositName;