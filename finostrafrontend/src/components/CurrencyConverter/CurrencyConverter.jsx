import React from "react";
import styles from "./currencyConverter.module.css";
import Converter from "../Converter/Converter";

function CurrencyConverter() {
    return (
        <div className={styles.container}>
             <Converter
             new_container="width_container527"
             showStar={false}
             />
        </div>
    );
}

export default CurrencyConverter;