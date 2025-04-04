import React from "react";
import styles from "./listMobileTable.module.css";

const listMobileItems = [
    {data: "пт.14 лютого", time: "12:33", img: "phone_pink.svg", description: "+380965842362", sum: "-254.00 UAH"},
    {data: "20.12.2024", time: "11:47", img: "phone_pink.svg", description: "+380965842362", sum: "-254.00 UAH"}
]

function ListMobileTable() {
    return (
        <table className={styles.container}>
            <thead>
            <tr className={styles.title}>
                <th className={styles.wrap_data_desc}>
                    <span className={styles.data_header}>Дата</span>
                    <span className={styles.desc_header}>Опис</span>
                </th>
                <th className={styles.sum_header}>Сума</th>
            </tr>
            </thead>
            <tbody className={styles.wrapper_body}>
            {listMobileItems.map(({data, time, img, description, sum}, index) =>
                (
                    <tr key={index} className={styles.wrapper_item}>
                        <td key={index}>{data}</td>
                        <td className={styles.wrap_data_content}>
                            <span className={styles.wrapper_content}>
                                <span className={styles.wrap_time}>{time}</span>
                                <span className={styles.wrap_img_desc}>
                                <img src={`/icons/${img}`} alt=""/>
                                <span className={styles.wrap_description}>{description}</span>
                                </span>
                            </span>
                            <span className={styles.wrap_sum}>{sum}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListMobileTable;