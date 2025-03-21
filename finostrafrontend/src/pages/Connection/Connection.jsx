import React from "react";
import styles from './connection.module.css';
import {Outlet} from "react-router-dom";

function Connection(){
    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}

export default Connection;