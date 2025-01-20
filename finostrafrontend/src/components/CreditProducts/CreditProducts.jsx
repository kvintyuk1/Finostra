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
                <div className={styles.wrapper_content}>
                    <div className={styles.pay_install}>
                        <img src="./icons/pay_instal.svg"/>
                        <div className={styles.wrapper_text}>
                            <div>Оплата частинами</div>
                            <span className={styles.text}>Купуйте зараз – платіть потім!</span>
                        </div>
                    </div>
                    <div className={styles.car_credit}>
                        <img src="./icons/car.svg"/>
                        <div className={styles.wrapper_text}>
                            <div>Авто в кредит</div>
                            <span className={styles.text}>Не відмовляйте собі у комфорті!</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default CreditProducts;