import React, { useContext } from "react";
import styles from "./send.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../LanguageContext";
import { sendTranslations } from "./sendTranslations";

function Send() {
    const { language } = useContext(LanguageContext);
    const t = sendTranslations[language] || sendTranslations["UA"];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_send}>
                <div className={styles.title}>{t.send}</div>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>{t.transferAmount}</div>
                        <input type="text" className={styles.send_input} placeholder={t.enterValue}/>
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>{t.transferCurrency}</div>
                        <select className={styles.valuta_select}>
                            <option>{t.select}</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PLN</option>
                        </select>
                    </div>
                    <div className={styles.wrap_item}>
                        <div className={styles.title_item}>{t.receivingCountry}</div>
                        <select className={styles.country_select}>
                            <option>{t.select}</option>
                            <option>USA</option>
                            <option>Germany</option>
                            <option>UK</option>
                            <option>Poland</option>
                        </select>
                    </div>
                </div>
            </div>
            <ButtonForCard
                title_button={t.send}
                sizeButton="size_button186"
            />
        </div>
    );
}

export default Send;
