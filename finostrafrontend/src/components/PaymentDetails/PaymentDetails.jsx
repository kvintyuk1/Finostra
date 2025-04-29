import React from "react";
import styles from "./paymentDetails.module.css";
import SelectDetails from "../SelectDetails/SelectDetails";
import FilesDetails from "../FilesDetails/FilesDetails";

function PaymentDetails() {
    return (
        <div className={styles.container}>
            <SelectDetails/>
            <FilesDetails/>
        </div>
    );
}

export default PaymentDetails;