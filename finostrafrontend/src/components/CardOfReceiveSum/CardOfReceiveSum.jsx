import React from "react";
import styles from "./cardOfReceiveSum.module.css";
import CardOfReceive from "../CardOfReceive/CardOfReceive";
import SumForReceive from "../SumForReceive/SumForReceive";

function CardOfReceiveSum() {
    return (
        <div className={styles.container}>
           <CardOfReceive/>
           <SumForReceive/>
        </div>
    );
}

export default CardOfReceiveSum;