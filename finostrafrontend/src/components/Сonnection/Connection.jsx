import React from "react";
import styles from "./connection.module.css";
import {useOutletContext} from "react-router-dom";

function Connection(){
    const { isDarkMode } = useOutletContext();
    return (
        <div>
            <h1>Connection</h1>
        </div>
    )
}
export default Connection;