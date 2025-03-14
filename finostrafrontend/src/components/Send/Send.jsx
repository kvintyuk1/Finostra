import React from "react";
import styles from "./send.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function Send() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_send}>
                <div className={styles.title}>Надіслати</div>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Сума переказу</div>
                        <input type="text" className={styles.send_input} placeholder="Введіть значення"/>
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Валюта переказу</div>
                        <select className={styles.valuta_select}>
                            <option>Оберіть</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PLN</option>
                        </select>
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>Країна одержання</div>
                        <select className={styles.country_select}>
                            <option>Оберіть</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PLN</option>
                        </select>
                    </div>
                </div>
            </div>
            <ButtonForCard
                title_button="Надіслати"
                sizeButton="size_button186"
            />
        </div>
    );
}

export default Send;