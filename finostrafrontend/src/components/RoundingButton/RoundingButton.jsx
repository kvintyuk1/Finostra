import React from "react";
import styles from "./roundingButton.module.css";

function RoundingButton(){
    return (
        <div className={styles.container}>
            <div className={styles.square_green}>
                <div className={styles.square_red}></div>
            </div>

        </div>
    )
}

export default RoundingButton;