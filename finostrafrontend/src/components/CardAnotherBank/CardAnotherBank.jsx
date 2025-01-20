import React from "react";
import styles from "./cardAnotherBank.module.css";

function CardAnotherBank({ isDarkMode }) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.info_star}>
                    <div className={styles.wrapper_info}>
                        <div className={styles.title}>
                            <span>Картка іншого банку України та світу</span>
                        </div>
                        <div className={styles.info}>
                            <img src="./img/anotherCard.jpg"/>
                            <div>Швидко оплачуйте своїми банківськими картками.</div>
                        </div>
                        <div className={styles.button}>
                            <button>Додати картку</button>
                        </div>
                    </div>
                    <div>
                        <img src="./img/star 3.png"/>
                    </div>
                </div>

            </div>
            <div>
                <img className={styles.tab_message} src="./icons/tabler_message.svg"/>
            </div>
        </div>
    )
}

export default CardAnotherBank;