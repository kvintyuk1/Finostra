import React from "react";
import styles from "./rulesMoneyBox.module.css";

const blockItems = [
    {
        img: "double_arrow_left",
        title: "Від находжень",
        text: "Під час надходження коштів на картку вибрана сума або відсоток буде\n" +
            "                        автоматично перераховуватися до «Скарбнички».",
        rule: "Можна відкладати по 50 грн або 10% від суми надходжень щоразу, коли на\n" +
            "                            картку надходять гроші."
    },
    {
        img:"money_calendar",
        title:"Регулярне поповнення",
        text:"Ви визначаєте суму, яку банк автоматично щомісяця буде перераховувати до «Скарбнички».",
        rule:"Наприклад, можна відкладати по 300 грн щомісяця 5 числа."
    },
    {
        img:"double_arrow_right",
        title:"Від витрат",
        text:"Під час розрахунків карткою (купівлі в магазинах, оплата послуг) буде автоматично перераховуватися «округлення до 10 грн».",
        rule:"Припустимо, якщо ви зробили купівлю на 26,7 грн, то до «Скарбнички» буде перераховано 3,3 грн."
    },
    {
        img:"round_arrow_right_broken",
        title:"Округлення залишку",
        text:"Наприкінці кожного дня баланс картки округляється до 10 грн, а дрібні гроші автоматично надходять до «Скарбнички».",
        rule:"Наприкінці дня баланс картки – 124,5 грн. Вранці – 120 грн, 4,5 грн перераховано до «Скарбнички»."
    }
]

function RulesMoneyBox() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_name}>
                <div className={styles.name}>Умови накопичення</div>
                <div className={styles.description}>
                    Підключайте, пробуйте різні варіанти та накопичуйте з усмішкою!
                </div>
            </div>
            <div className={styles.wrap_content}>
                {blockItems.map(({img, title, text, rule}, index) => (
                    <div key={index} className={styles.wrap_block}>
                        <div className={styles.title_img}>
                            <img src={`/icons/${img}.svg`} alt=""/>
                            <div className={styles.title}>{title}</div>
                        </div>
                        <div className={styles.text}>{text}</div>
                        <div className={styles.wrap_rules}>
                            <div className={styles.rule}>{rule}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RulesMoneyBox;