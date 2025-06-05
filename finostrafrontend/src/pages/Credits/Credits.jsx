import React, {useState} from 'react';
import styles from './credits.module.css';
import {Outlet} from "react-router-dom";

function Credits(){
    const [creditLimit,setCreditLimit] = useState(0);
    const [isEditing,setIsEditing] = useState(false);

    return (
        <div className={styles.container}>
           <Outlet context={{creditLimit,setCreditLimit,isEditing,setIsEditing}}/>
        </div>
    )
}
export default Credits;