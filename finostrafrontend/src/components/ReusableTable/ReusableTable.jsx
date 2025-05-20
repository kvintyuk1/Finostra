import React from "react";
import styles from "./reusableTable.module.css";

const dataItems = [
    {col1:"24 міс", col2: 20},
    {col1:"24 міс", col2: 20},
    {col1:"24 міс", col2: 20},
    {col1:"24 міс", col2: 20},
    {col1:"24 міс", col2: 20},
    {col1:"24 міс", col2: 20},
]

function ReusableTable ({new_height_wrap_table="height_wrap_table171",show_table = true,
                        type="first",limit}) {
    const limitData = type === "second" && limit ? dataItems.slice(0,limit) : dataItems;

    return (
        <table className={`${styles.wrap_table} ${styles[new_height_wrap_table]}`}>
            <tbody className={styles.wrap_body}>
            {type === "first" && (
                <>
                    <tr className={styles.wrap_row}>
                        <td className={styles.item}>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    {show_table &&
                        <div>
                            <tr className={styles.wrap_row}>
                                <td className={styles.item}>20</td>
                                <td>20</td>
                                <td>20</td>
                            </tr>
                            <tr className={styles.wrap_row}>
                                <td className={styles.item}>20</td>
                                <td>20</td>
                                <td>20</td>
                            </tr>
                        </div>}
                </>
            )}
            {type === "second" && limitData.map((row,index)=>(
                <tr key={index} className={styles.wrap_row}>
                    <td className={styles.item}>{row.col1}</td>
                    <td>{row.col2}</td>
                    <td><input type="checkbox"/></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ReusableTable;