import React from "react";
import styles from "./mobileTopUp.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import CardForMobileTopUp from "../../../components/CardForMobileTopUp/CardForMobileTopUp";
import ReportMobileTopUp from "../../../components/ReportMobileTopUp/ReportMobileTopUp";
import InfoAboutService from "../../../components/InfoAboutService/InfoAboutService";

function MobileTopUp({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_mobileTopUp}>
                    <TransferToCardInfo
                    img="phone"
                    title="Поповнення мобільного"
                    subtitle="Поповнення мобільного онлайн."
                    />
                    <CardForMobileTopUp/>
                    <ReportMobileTopUp/>
                    <InfoAboutService/>
                </div>
            </div>
        </div>

    );
}

export default MobileTopUp;