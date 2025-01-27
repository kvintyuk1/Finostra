import React from "react";
import styles from "./transaction.module.css";
import {useOutletContext} from "react-router-dom";

function Transaction(){
    const { isDarkMode } = useOutletContext();

    return (
        <div>
            <h1>Transaction</h1>
        </div>
    )
}
export default Transaction;