import React, {useState} from "react";
import styles from "./limitFilter.module.css";

function LimitFilter({
                         min = 0, max = 200000, initialValue = 0, labelSuffix = "UAH",
                         leftLabel, rightLabel, customLabel, hideRightLabel = false,hideLabelSuffix= false,
                         hideFilterLabelSuffix = false, showMinMaxBelow = false,sizeLimit="widthLimit100"
                     }) {
    const [limit, setLimit] = useState(initialValue);
    return (
        <div className={styles.container}>
            {!showMinMaxBelow && (
                <span className={styles.left}>{leftLabel || min.toLocaleString()} {!hideLabelSuffix && labelSuffix}</span>
            )}
            <div className={`${styles.wrap_limit} ${styles[sizeLimit]}`}>
                <div className={styles.limit}>
                    <div className={styles.leftLabel}>{customLabel || "Сума"}</div>
                    {hideRightLabel && (
                        <div className={styles.rightLabel}>{limit.toLocaleString()} {!hideFilterLabelSuffix && labelSuffix}</div>
                    )}
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={limit}
                    onChange={(e) => setLimit(parseInt(e.target.value, 10))}
                    className={styles.range}
                />
                {showMinMaxBelow && (
                    <div className={styles.minMaxBelow}>
                        <span className={styles.left}>{leftLabel || min.toLocaleString()} {!hideLabelSuffix && labelSuffix}</span>
                        <span className={styles.right}>{rightLabel || max.toLocaleString()} {!hideLabelSuffix && labelSuffix}</span>
                    </div>
                )}
            </div>
            {!showMinMaxBelow && (
                <span
                    className={styles.right}>{rightLabel || max.toLocaleString()} {!hideLabelSuffix && labelSuffix}</span>
            )}
        </div>
    );
}

export default LimitFilter;