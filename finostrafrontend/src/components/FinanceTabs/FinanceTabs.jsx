import React from "react";
import styles from "./financeTabs.module.css";
import CardUniversal from "../CardUniversal/CardUniversal";

const tabItems = [
    {title:"Конверти"},
    {title:"Депозити"},
    {title:"Кредити"},
]

function FinanceTabs() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_activeCards}>
                <div className={styles.wrapper_button}>
                    <span className={styles.title_but}>Картки:</span>
                    <img src="/icons/add_card.svg" alt=""/>
                </div>
                <div className={styles.wrap_active}>
                    <div className={styles.wrap_title}>
                        <div className={styles.wrap_act_but}>
                            <img src="/img/ellipse7.png" className={styles.img_style} alt=""/>
                            <span className={styles.name_but}>Активні</span>
                        </div>
                        <img src="/icons/arrow_down16.svg" alt=""/>
                    </div>
                   <CardUniversal/>
                </div>
            </div>

            <div className={styles.wrapper_tabs}>
                {
                    tabItems.map(({title},index)=> (
                        <div key={index} className={styles.wrap_button}>
                            <span className={styles.title_button}>{title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FinanceTabs;