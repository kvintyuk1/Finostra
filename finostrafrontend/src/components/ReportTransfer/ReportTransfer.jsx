import React, {useState} from "react";
import styles from "./reportTransfer.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";

function ReportTransfer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_content}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.title}>Перекази</div>
                        <SentReceivedSwitch
                            text_but_one="Надіслані"
                            text_but_two="Отримані"
                        />
                    </div>
                    <table className={styles.wrapper_table}>
                        <thead className={styles.wrapper_header}>
                        <tr>
                            <th>Система</th>
                            <th>Номер переказу</th>
                            <th>Відправник</th>
                            <th>Сума отримання</th>
                            <th>Валюта отримання</th>
                            <th>Країна</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.description}>Переказів, здійснених за період 08 січня 2025 - 08 лютого 2025, не
                    знайдено
                </div>
            </div>
            <ButtonForCard
                title_button="Показати за 08 грудня 2024 - 08 січня 2025"
                img="arrow_down16_grey"
                colorText="greyText"
                sizeButton="size_button375"
                backgroundButton="blackBackground"
                fontWeight="fontWeight400"
            />
        </div>
    );
}

export default ReportTransfer;