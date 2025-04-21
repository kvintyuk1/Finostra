import React, { useContext } from "react";
import styles from "./details.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Payment from "../../../components/Payment/Payment";
import Category from "../../../components/Category/Category";
import Questions from "../../../components/Questions/Questions";
import NewPayment from "../../../components/NewPayment/NewPayment";
import { LanguageContext } from "../../../components/LanguageContext";
import { detailsTranslations } from "./detailsTranslations";

function Details({ isDarkMode }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = detailsTranslations[selectedLanguage];

    return (
        <div className={`${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
            <div className={styles.container}>
                <div className={styles.transactionWrapper}>
                    <TransferToCardInfo
                        img="card_payment"
                        title={t.transferTitle}
                        subtitle={t.transferSubtitle}
                    />
                    <NewPayment isDarkMode={isDarkMode} />
                    <Category />
                </div>
                <Questions questionsData={t.questions} />
            </div>
        </div>
    );
}

export default Details;
