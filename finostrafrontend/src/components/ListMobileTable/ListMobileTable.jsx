import React, { useContext } from "react";
import styles from "./listMobileTable.module.css";
import { LanguageContext } from "../LanguageContext";
import { listMobileTableTranslations } from "./listMobileTableTranslations";

function formatDateTime(isoDate) {
    const date = new Date(isoDate);


    const year = date.getFullYear().toString();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;

    return { formattedDate, formattedTime };
}

function ListMobileTable({ mobileTransactions }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = listMobileTableTranslations[selectedLanguage];

    let checkingDate = '';
    return (
        <table className={styles.container}>
            <thead>
                <tr className={styles.title}>
                    <th className={styles.wrap_data_desc}>
                        <span className={styles.data_header}>{t.date}</span>
                        <span className={styles.desc_header}>{t.description}</span>
                    </th>
                    <th className={styles.sum_header}>{t.amount}</th>
                </tr>
            </thead>
            <tbody className={styles.wrapper_body}>
                {mobileTransactions.map(({ date, receiver, amount, currency }, index) => {
                    const { formattedDate, formattedTime } = formatDateTime(date);

                    let similar = false;
                    similar = checkingDate === formattedDate ? true : false;

                    checkingDate = formattedDate;

                    return (
                        <tr key={index} className={styles.wrapper_item}>
                            {similar ? (null) : (<td><span className={styles.date}>{formattedDate}</span></td>)}
                            <td className={styles.wrap_data_content}>
                                <span className={styles.wrapper_content}>
                                    <span className={styles.wrap_time}> {formattedTime}</span>
                                    <span className={styles.wrap_img_desc}>
                                        <img src="/icons/phone_pink.svg" alt="" />
                                        <span className={styles.wrap_description}>{receiver}</span>
                                    </span>
                                </span>
                                <span className={styles.wrap_sum}>{amount} {currency}</span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ListMobileTable;
