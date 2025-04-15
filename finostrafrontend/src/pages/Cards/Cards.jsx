import React from 'react';
import styles from './cards.module.css';
import {Outlet} from "react-router-dom";

function Cards(){
    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}

export default Cards;