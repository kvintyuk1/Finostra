import React from "react";
import styles from "./infoAboutService.module.css";
import CollapsibleText from "../CollapsibleText/CollapsibleText";

function InfoAboutService() {
    return (
        <div className={styles.container}>
             <CollapsibleText
             title="Інформація про сервіс"
             text="Оперативне поповнення рахунку мобільного телефону"
             description="Закінчилися кошти на рахунку? Не проблема! «Finostra» максимально
             спрощує процедуру поповнення рахунку мобільного телефону, де б Ви не знаходилися.
             Усього декілька дотиків або кліків – і Ви знову на зв'язку. Головна умова – наявність
             мобільного, Інтернету, платіжної картки."
             maxLength={100}
             />
        </div>
    );
}

export default InfoAboutService;