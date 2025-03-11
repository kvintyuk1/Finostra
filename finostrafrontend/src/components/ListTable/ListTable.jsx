import React from "react";
import styles from "./listTable.module.css";

const listItems = [
    {data: "13.02.2025"},
    {time: "22:06", img: "arrow-down-broken.svg", description: "На картку", sum: "+400 UAH"},
    {data: "06.02.2025"},
    {time: "10:46", img: "arrow-down-broken.svg", description: "Бусленко Михайло Ігорович", sum: "+15 000 UAH"},
    {data: "05.02.2025"},
    {time: "12:02", img: "card-send-linear.svg", description: "Зі своєї картки", sum: "-50 UAH"},
    {data: "01.02.2025"},
    {time: "16:49", img: "arrow-down-broken.svg", description: "Боцюрків Ілля Борисович", sum: "+150 UAH"},
    {time: "13:51", img: "card-send-linear.svg", description: "Зі своєї картки", sum: "-240 UAH"},
]

function ListTable() {
    return (
        <table className={styles.container}>
            <thead className={styles.wrapper_header}>
            <tr className={styles.title}>
                <th className={styles.data_header}>Дата</th>
                <th className={styles.desc_header}>Опис</th>
                <th className={styles.sum_header}>Сума</th>
            </tr>
            </thead>
            <tbody>
            {listItems.map(({data, time, img, description, sum}, index) =>
                data ? (
                    <tr key={index}>
                        <td colSpan="3" className={styles.wrapper_data}>{data}</td>
                    </tr>
                ) : (
                    <tr key={index} className={styles.container_table}>
                        <td></td>
                        <td className={styles.wrapper_time_desc}>
                            <span className={styles.wrap_time}>{time}</span>
                            <span className={styles.wrap_img}>
                                <img src={`./icons/${img}`} alt=""/>
                                <span>{description}</span>
                            </span>
                        </td>
                        <td className={styles.wrap_sum}>{sum}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    );
}

export default ListTable;