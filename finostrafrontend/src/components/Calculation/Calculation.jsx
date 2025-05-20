import React from "react";
import styles from "./calculation.module.css";

const depositItems = [
    {name:"Сума вкладу",sum: "1 000 UAH"},
    {name:"Сума поповнень",sum: "1 500 UAH"},
    {name:"Процентна ставка",sum: "2.5 % на рік"},
    {name:"Проценти (дохід)",sum: "12.50 UAH"},
    {name:"Податок",sum: "2.44 UAH"},
]

function Calculation() {
    return (
        <div className={styles.container}>
             <div className={styles.title}>Розрахунок</div>
             <div className={styles.wrap_about_deposit}>
                 {depositItems.map(({name,sum},index)=> {
                     return (
                         <div key={index} className={styles.wrap_item}>
                             <div className={styles.name}>{name}</div>
                             <div className={styles.sum}>{sum}</div>
                         </div>
                     )
                 })}
             </div>
        </div>
    );
}

export default Calculation;