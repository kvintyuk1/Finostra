import React from "react";
import styles from "./lineVerticalDotted.module.css";

function LineVerticalDotted({heightLine="height43"}) {
    return (
        <div className={`${styles.line} ${styles[heightLine]}`}></div>
    );
}

export default LineVerticalDotted;