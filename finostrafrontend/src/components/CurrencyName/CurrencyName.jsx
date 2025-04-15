import React from "react";
import styles from "./currencyName.module.css";

const currencyNameItems = [
    {title:"Гривня"},
    {title:"Доллар США"},
    {title:"Євро"}
]

function CurrencyName({selectedCurrency,setSelectedCurrency}) {
    return (
        <div className={styles.container}>
            {currencyNameItems.map(({title},index)=> (
                <button key={index}
                        onClick={()=>setSelectedCurrency(title)}
                        className={`${styles.wrap_button} ${selectedCurrency === title ? styles.active : ""}`}>{title}</button>
            ))}
        </div>
    );
}

export default CurrencyName;