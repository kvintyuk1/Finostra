import React, { useContext } from "react";
import styles from "./mobileTopUp.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import CardForMobileTopUp from "../../../components/CardForMobileTopUp/CardForMobileTopUp";
import ReportMobileTopUp from "../../../components/ReportMobileTopUp/ReportMobileTopUp";
import InfoAboutService from "../../../components/InfoAboutService/InfoAboutService";
import { LanguageContext } from "../../../components/LanguageContext";
import { mobileTopUpTranslations } from "./mobileTopUpTranslations";

function MobileTopUp({ isDarkMode }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = mobileTopUpTranslations[selectedLanguage];

    return (
        <div className={`${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_mobileTopUp}>
                    <TransferToCardInfo
                        img="phone"
                        title={t.title}
                        subtitle={t.subtitle}
                    />
                    <CardForMobileTopUp />
                    <ReportMobileTopUp />
                    <InfoAboutService />
                </div>
            </div>
        </div>
    );
}

export default MobileTopUp;
