import React from "react";
import styles from "./newPayment.module.css";
import Search from "../Search/Search";
import City from "../City/City";

function NewPayment() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.wrapper_title}>
                    <div className={styles.title}>Новий платіж</div>
                    <div className={styles.subtitle}>Щоб здійснити платіж, скористайтеся функцією пошуку.</div>
                </div>
                <div className={styles.wrapper_payment}>
                    <Search
                        sizeInput="width740"
                        placeholder="Введіть ЄДРПОУ, IBAN або назву підприємства"
                        colorBorder="border-bottom_grey"
                    />
                    <City/>
                </div>
            </div>

        </div>
    );
}

export default NewPayment;