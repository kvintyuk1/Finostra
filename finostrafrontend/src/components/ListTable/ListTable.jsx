import React, { useContext, useEffect, useState } from "react";
import styles from "./listTable.module.css";
import { LanguageContext } from "../LanguageContext";
import { listTableTranslations } from "./listTableTranslations";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBankCardsByCurrency } from "../../redux/slices/bankCardSlice";
import { useOutletContext } from "react-router-dom";

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("uk-UA", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function ListTable({ transactions }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = listTableTranslations[selectedLanguage];

    const cards = useOutletContext();

    const myCardNumbers = cards?.map(card => card.cardNumber) || [];

    function getTransactionType(tx) {
        const isSenderMine = myCardNumbers.includes(tx.sender);
        const isReceiverMine = myCardNumbers.includes(tx.receiver);

        if (isSenderMine && isReceiverMine) return "internal";
        if (!isSenderMine && isReceiverMine) return "incoming";
        if (isSenderMine && !isReceiverMine) return "outgoing";
        return "unknown";
    }

    const groupedByDate = transactions.reduce((acc, tx) => {
        const date = formatDate(tx.date);
        if (!acc[date]) acc[date] = [];
        acc[date].push(tx);
        return acc;
    }, {});

    return (
        <table className={styles.container}>
            <thead className={styles.wrapper_header}>
                <tr className={styles.title}>
                    <th className={styles.data_header}>{t.date}</th>
                    <th className={styles.desc_header}>{t.description}</th>
                    <th className={styles.sum_header}>{t.amount}</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(groupedByDate).map(([date, txs], i) => (
                    <React.Fragment key={i}>
                        <tr>
                            <td colSpan="3" className={styles.wrapper_data}>{date}</td>
                        </tr>
                        {txs.map((tx, j) => {
                            const type = getTransactionType(tx);
                            console.log(type);
                            const icon =
                                type === "incoming" ? "card-send-linear.svg" : "arrow-down-broken.svg";

                            return (
                                <tr key={j} className={styles.container_table}>
                                    <td></td>
                                    <td className={styles.wrapper_time_desc}>
                                        <span className={styles.wrap_time}>{formatTime(tx.date)}</span>
                                        <span className={styles.wrap_img}>
                                            <img
                                                src={`/icons/${icon}`}
                                                alt=""
                                            />
                                            <span>
                                                {type === "internal"
                                                    ? "Між вашими картками"
                                                    : tx.receiver}
                                            </span>
                                        </span>
                                    </td>
                                    <td className={styles.wrap_sum}>
                                        {type === "incoming" ? (
                                            `+${tx.amount} ${tx.currency}`
                                        ) : type === "outgoing" ? (
                                            `-${tx.amount} ${tx.currency}`
                                        ) : (
                                            `${tx.amount} ${tx.currency}`
                                        )}
                                    </td>

                                </tr>
                            );
                        })}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

export default ListTable;
