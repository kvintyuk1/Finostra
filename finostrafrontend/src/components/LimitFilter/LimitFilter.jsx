import React, {useState} from "react";
import styles from "./limitFilter.module.css";

function LimitFilter() {
    const [limit, setLimit] = useState(0);
    return (
        <div className={styles.container}>
            <label className={styles.label}>{limit} UAH</label>
            <input
                type="range"
                min="0"
                max="200000"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className={styles.range}
            />

        </div>
    );
}

export default LimitFilter;