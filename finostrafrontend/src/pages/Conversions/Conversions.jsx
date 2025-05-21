import React from "react";
import styles from "./conversions.module.css";
import {Outlet} from "react-router-dom";

function Conversions() {
    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    );
}

export default Conversions;