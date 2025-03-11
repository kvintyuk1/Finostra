import React from "react";
import styles from "./details.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Payment from "../../../components/Payment/Payment";
import Category from "../../../components/Category/Category";
import Questions from "../../../components/Questions/Questions";
import NewPayment from "../../../components/NewPayment/NewPayment";

function Details({isDarkMode}) {

    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.transactionWrapper}>
                    <TransferToCardInfo
                        img="card_payment"
                        title="Платежі"
                        subtitle="Не гайте часу в чергах і не переплачуйте за комісії."
                    />
                    <NewPayment isDarkMode={isDarkMode}/>
                    <Category/>
                </div>
                <Questions/>
            </div>
        </div>
    );
}

export default Details;