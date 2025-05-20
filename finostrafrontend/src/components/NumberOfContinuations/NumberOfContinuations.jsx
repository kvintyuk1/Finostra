import React, {useState} from "react";
import styles from "./numberOfContinuations.module.css";

const numbers = [
    {number:"1"},
    {number:"2"},
    {number:"3"},
    {number:"4"},
    {number:"5"},
    {number:"6"},
]

function NumberOfContinuations() {
    const [selectedNumber,setSelectedNumber] = useState(0);
    return (
        <div className={styles.container}>
            <div className={styles.title}>Кількість продовжень</div>
            <div className={styles.wrap_content}>
                <div className={styles.slider_number}>
                    {numbers.map((item, index) => (
                        <div
                            key={item.number}
                            className={`${styles.rate_point} ${index === selectedNumber ? styles.active : ''}`}
                            onClick={() => setSelectedNumber(index)}
                        >
                            <div className={styles.dot}/>
                            <span className={styles.month}>{item.number}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.number}>99</div>
            </div>

        </div>
    );
}

export default NumberOfContinuations;