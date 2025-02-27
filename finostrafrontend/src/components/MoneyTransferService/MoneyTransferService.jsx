import React from "react";
import styles from "./moneyTransferService.module.css";
import CollapsibleText from "../CollapsibleText/CollapsibleText";

function MoneyTransferService() {
    return (
        <div className={styles.container}>
             <CollapsibleText
             title="Сервіс грошових переказів"
             text="Швидко, доступно та безпечно переказуйте кошти з картки на картку будь-якого банку!"
             description="Finostra пропонує зручний сервіс онлайн-переказів між
             картками Visa та Mastercard, емітованими банками, що входять до
             міжнародних платіжних систем. Для здійснення переказу потрібен лише
             доступ до Інтернету та будь-який пристрій – комп’ютер, планшет чи
             смартфон. Завдяки миттєвому зарахуванню коштів ви можете переказувати
             гроші на картки банків у будь-якій країні світу."
             maxLength={100}
             />
        </div>
    );
}

export default MoneyTransferService;