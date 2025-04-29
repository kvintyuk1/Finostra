import React from "react";
import styles from "./selectDetails.module.css";

function SelectDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_content}>
                <div className={styles.title}>Реквізити</div>
                <div className={styles.wrap_details}>
                    <div className={styles.wrap_item}>
                        <span className={styles.name}>Виберіть призначення платежу</span>
                        <select className={styles.wrap_options}>
                            <option>Виберіть</option>
                            <option>Оплата замовлення</option>
                            <option>Оплата перевезення</option>
                            <option>Оплата таможні</option>
                        </select>
                    </div>
                    <div className={styles.wrap_item}>
                        <span className={styles.name}>Виберіть категорію призначення</span>
                        <select className={styles.wrap_options}>
                            <option>Список порожній</option>
                            <option>Товар</option>
                            <option>Перевезник</option>
                            <option>Таможня</option>
                        </select>
                    </div>
                    <div className={styles.wrap_item}>
                        <span className={styles.name}>Додаткова інформація (латиницею)</span>
                        <input type="text" className={styles.input} placeholder="Введіть значення"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectDetails;