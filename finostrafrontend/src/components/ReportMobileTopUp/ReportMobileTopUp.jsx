import React from "react";
import styles from "./reportMobileTopUp.module.css";
import Period from "../Period/Period";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import ListMobileTable from "../ListMobileTable/ListMobileTable";

function ReportMobileTopUp() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_section}>
                <div className={styles.wrapper_period_search}>
                    <Period
                    sizePeriod="size304"
                    iconSrc="/icons/calendar2.svg"
                    iconPosition="right"
                    />
                    <Search
                    sizeInput="width202"
                    />
                </div>
                <Filter/>
            </div>
            <div>
                <ListMobileTable/>
            </div>
        </div>
    );
}

export default ReportMobileTopUp;