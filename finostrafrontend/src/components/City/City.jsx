import React from "react";
import styles from "./city.module.css";

function City() {
    return (
        <div className={styles.container}>
             <div className={styles.title}>Місто</div>
            <select name="city" id="city" className={styles.wrap_select}>
                <option value="kyiv">Київ</option>
                <option value="lviv">Львів</option>
                <option value="odesa">Одеса</option>
            </select>
        </div>
    );
}

export default City;