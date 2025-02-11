import React from "react";
import styles from "./digitalBankCard.module.css";

function DigitalBankCard({ isDarkMode }) {

    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_content}>
                    <div className={styles.title}>Digital картки від Finostra</div>
                    <div className={styles.info}>
                        <img src="./img/finostra_card.jpg" alt=""/>
                        <ul>
                            <li>Кредитний ліміт до 200 000 грн.</li>
                            <li> Випуск і платежі без комісії.</li>
                        </ul>
                    </div>
                    <div className={styles.button}>
                        <button>Переглянути картки</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalBankCard;