import React from "react";
import styles from './connection.module.css';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function Connection(){
    const { cards, fetchStatus } = useSelector(state => state.bankCard);
    return (
        <div className={styles.container}>
            <Outlet context={{ cards, status: fetchStatus }} />
        </div>
    )
}

export default Connection;