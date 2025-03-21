import React, {useState} from "react";
import styles from "./transactions.module.css";
import {Outlet} from "react-router-dom";

function Transactions() {
    return (
     <div className={styles.container}>
         <Outlet/>
     </div>
    )
}

export default Transactions;