import React from 'react';
import styles from './credits.module.css';
import {Outlet} from "react-router-dom";

function Credits(){
    return (
        <div className={styles.container}>
           <Outlet/>
        </div>
    )
}
export default Credits;