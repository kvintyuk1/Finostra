import React, { useContext } from "react";
import styles from "./financeTabs.module.css";
import CardUniversal from "../CardUniversal/CardUniversal";
import { LanguageContext } from "../LanguageContext";
import { financeTabsTranslations } from "./financeTabsTranslations";

function FinanceTabs() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tTabs = financeTabsTranslations[selectedLanguage];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_activeCards}>
                <div className={styles.wrapper_button}>
                    <span className={styles.title_but}>{tTabs.cards}</span>
                    <img src="/icons/add_card.svg" alt=""/>
                </div>
                <div className={styles.wrap_active}>
                    <div className={styles.wrap_title}>
                        <div className={styles.wrap_act_but}>
                            <img src="/img/ellipse7.png" className={styles.img_style} alt=""/>
                            <span className={styles.name_but}>{tTabs.active}</span>
                        </div>
                        <img src="/icons/arrow_down16.svg" alt=""/>
                    </div>
                    <CardUniversal/>
                </div>
            </div>

            <div className={styles.wrapper_tabs}>
                {tTabs.tabItems.map((title, index) => (
                    <div key={index} className={styles.wrap_button}>
                        <span className={styles.title_button}>{title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FinanceTabs;
