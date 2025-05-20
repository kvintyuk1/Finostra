import React, {useState} from "react";
import styles from "./filterRate.module.css";

const rates = [
    {month: 3, rate: "2.5%"},
    {month: 4, rate: "11%"},
    {month: 5, rate: "11%"},
    {month: 6, rate: "9%"},
    {month: 7, rate: "9%"},
    {month: 8, rate: "9%"},
    {month: 9, rate: "10%"},
    {month: 10, rate: "10%"},
    {month: 11, rate: "10%"},
    {month: 12, rate: "10%"},
    {month: 19, rate: "10%"},
]

function FilterRate() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className={styles.container}>
            {rates.map((item, index) => (
                <div
                    key={item.month}
                    className={`${styles.rate_point} ${index === selectedIndex ? styles.active : ''}`}
                    onClick={() => setSelectedIndex(index)}
                >
                    <span className={styles.rate}>{item.rate}</span>
                    <div className={styles.dot}/>
                    <span className={styles.month}>{item.month}</span>
                </div>
            ))}
        </div>
    );
}

export default FilterRate;