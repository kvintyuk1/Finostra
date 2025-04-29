import React from "react";
import styles from "./depositTools.module.css";

const depositToolsItems = [
    {id:"conditions",img:"percent37",name:"Умови вкладів"},
    {id:"calculator",img:"calculator23",name:"Калькулятор"},
    {id:"compare",img:"compare",name:"Порівняти дохід"},
]

function DepositTools({selectedDeposit, setSelectedDeposit}) {
    return (
        <div className={styles.container}>
            {depositToolsItems.map(({id,img,name},index)=> (
                <button key={index}
                        onClick={()=>setSelectedDeposit(id)}
                        className={`${styles.wrap_button} ${selectedDeposit === id ? styles.active : ""}`}>
                    <div className={styles.wrap_content}>
                        <img src={`/icons/${img}.svg`} alt=""/>
                        <span className={styles.name}>{name}</span>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default DepositTools;