import React from "react";
import styles from "./saving.module.css";
import {Outlet} from "react-router-dom";

function Saving(){
    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}
export default Saving;