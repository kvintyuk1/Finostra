import React from "react";
import styles from "./listTotalAmount.module.css";
import Period from "../Period/Period";
import Search from "../Search/Search";
import ListTable from "../ListTable/ListTable";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";

function ListTotalAmount() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_listContainer}>
                <div className={styles.wrapper_list}>
                    <div className={styles.container_period_search}>
                        <Period/>
                        <Search/>
                    </div>
                    <ListTable/>
                </div>
                <ButtonForCard
                    title_button="Завантажити ще"
                    sizeButton="size_button207"
                    colorText="greyText"
                    backgroundButton="blackBackground"
                    fontWeight="fontWeight400"
                    img="/icons/arrow_down_but.svg"
                />
            </div>
        </div>
    );
}

export default ListTotalAmount;