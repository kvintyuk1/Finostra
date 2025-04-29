import React from "react";
import styles from "./infoTabsHouseCredit.module.css";

const tabItems = [
    {
        img: "security24",
        title: "Безпека",
        description: "Під час оформлення іпотеки нерухомість та всі документи ретельно перевіряються нотаріусом. " +
            "Немає прихованих комісій і платежів"
    },
    {
        img: "finostra_logo",
        title: "Зручність ",
        description: "Контролюйте та сплачуйте іпотеку в додатку Finostra фбо через web-версію"
    },
    {
        img: "outline_time",
        title: "Швидкість",
        description: "Дізнайтесь про рішення в режимі онлайн. Оформлення угоди - від 3 до 7 днів."
    }
]


function InfoTabsHouseCredit() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_tabs}>
                {
                    tabItems.map(({img, title, description}, index) => (
                        <div key={index} className={styles.wrap_tab}>
                            <div className={styles.wrap_content}>
                                <div className={styles.wrap_logo_title}>
                                    <img src={`/icons/${img}.svg`} alt=""/>
                                    <div className={styles.title}>{title}</div>
                                </div>
                                <div className={styles.description}>{description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.wrapper_taxCredit}>
                <div className={styles.wrap_name_subtitle}>
                    <div className={styles.name}>Податкова знижка</div>
                    <div className={styles.subtitle}>Це можливість отримати компенсацію 18% від суми
                        сплачених за іпотекою відсотків. Право на знижку гарантовано згідно зі ст. 166
                        Податкового кодексу України.
                    </div>
                </div>
                <div className={styles.wrap_text}>
                    Порядок отримання податкової знижки:
                    <ul className={styles.wrap_ul}>
                        <li>Замовте в банку довідку про сплачені відсотки.</li>
                        <li>Отримайте довідку про доходи за місцем роботи.</li>
                        <li>Підготуйте пакет документа.</li>
                        <li>Надайте декларацію про доходи та документи до фіксальної служби.</li>
                        <li>Отримайте податкову знижку.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InfoTabsHouseCredit;