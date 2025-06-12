import React from "react";
import styles from "./managementPercentage.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function ManagementPercentage() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Проценти</div>
            <div className={styles.to_card}>
                <ButtonForCard
                    img="cards20"
                    title_button="На карту"
                    sizeButton="size_button162"
                />
                <div className={styles.description}>Проценти можна відразу витрачати</div>
            </div>
            <div className={styles.to_deposit}>
                <ButtonForCard
                    img="percent16"
                    title_button="До вкладу"
                    sizeButton="size_button162"
                />
                <div className={styles.description}>Збільшується доходність за вкладом</div>
            </div>
        </div>
    );
}

export default ManagementPercentage;