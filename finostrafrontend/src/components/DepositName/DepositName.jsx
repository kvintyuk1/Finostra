import React from "react";
import styles from "./depositName.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function DepositName({
                         title, description, new_container = "height_container285",
                         new_wrapper_content = "height_wrapper_content225",
                         new_wrap_description = "height_wrap_description225",
                         show = true,
                         show_table = true, show_button = true
                     }) {
    return (
        <div className={`${styles.container} ${styles[new_container]}`}>
            <div className={`${styles.wrapper_content} ${styles[new_wrapper_content]}`}>
                <div className={`${styles.wrap_description} ${styles[new_wrap_description]}`}>
                    <div className={styles.wrap_title_describe}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.describe}>{description}</div>
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
                <div className={styles.text1}>Так</div>
                <div className={styles.text2}>Щомісяця</div>
                <table className={styles.wrap_table}>
                    <tbody className={styles.wrap_body}>
                    <tr className={styles.wrap_row}>
                        <td className={styles.item}>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    {show_table &&
                        <div>
                            <tr className={styles.wrap_row}>
                                <td className={styles.item}>20</td>
                                <td>20</td>
                                <td>20</td>
                            </tr>
                            <tr className={styles.wrap_row}>
                                <td className={styles.item}>20</td>
                                <td>20</td>
                                <td>20</td>
                            </tr>
                        </div>}
                    </tbody>
                </table>
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
            </div>
        </div>
    );
}

export default DepositName;