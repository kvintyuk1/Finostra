import React from "react";
import styles from "./creditProducts.module.css";

function CreditProducts({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>
                        <img src={isDarkMode ? "./icons/creditProducts.svg" : "./icons/creditProducts-black.svg"}/>
                        <span>Кредитні Продукти</span>
                    </div>
                    <div className={styles.wrapper_img}>
                        <img src={isDarkMode ? "./icons/arrow-out-white.svg" : "./icons/arrow-out.svg"}/>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.wrapper_content}>
                        <div className={`${styles.item} ${styles.bg_color_violet}`}>
                            <img src="./icons/pay_instal.svg"/>
                            <div className={styles.wrapper_text}>
                                <div>Оплата частинами</div>
                                <span className={styles.text}>Купуйте зараз – платіть потім!</span>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.bg_color_pink}`}>
                            <img src="./icons/car.svg"/>
                            <div className={styles.wrapper_text}>
                                <div>Авто в кредит</div>
                                <span className={styles.text}>Не відмовляйте собі у комфорті!</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper_content}>
                        <div className={`${styles.item} ${styles.bg_color_pink}`}>
                            <img src="./icons/cash.svg"/>
                            <div className={styles.wrapper_text}>
                                <div>Кредит готівкою</div>
                                <span className={styles.text}>Гроші на картку онлайн</span>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.bg_color_violet}`}>
                            <img src="./icons/home-credit.svg"/>
                            <div className={styles.wrapper_text}>
                                <div>Житло в кредит</div>
                                <span className={styles.text}>Іпотека за ціною оренди.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreditProducts;