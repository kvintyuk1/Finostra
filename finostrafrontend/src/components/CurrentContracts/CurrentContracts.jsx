import React from "react";
import styles from "./currentContracts.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function CurrentContracts() {
    return (
        <div className={styles.container}>
            <img src="/img/contracts.png" alt=""/>
            <ButtonForCard
                title_button="На головну"
                sizeButton="size_button173"
            />
        </div>
    );
}

export default CurrentContracts;