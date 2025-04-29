import React from "react";
import styles from "./creditLimit.module.css";
import AddCreditLimit from "../AddCreditLimit/AddCreditLimit";
import CurrencyCard from "../CurrencyCard/CurrencyCard";

function CreditLimit({
                         selectedCard,
                         hideAttention = true,
                         text1,
                         text2,
                         text3,
                         hideCurrencyCard = true,
                         hideAddCreditLimit = true,
                         showOnlyButtons,
                         sizeContainer="heightContainer387",
                         heightContent="heightContent328",
                         gap_content="gapContent0"
                     }) {
    return (
        <div className={`${styles.container} ${styles[sizeContainer]}`}>
            <div className={`${styles.wrap_content} ${styles[heightContent]} ${styles[gap_content]}`}>
                {!hideAttention && (
                    <div className={styles.attention}>Увага! Комісія за обслуговування Золотої картки складає 20
                        грн на місяць.</div>
                )}
                <ul className={styles.wrap_ul}>
                    {text1 && (<li>{text1}</li>)}
                    {text2 && (<li>{text2}</li>)}
                    {text3 && (<li>{text3}</li>)}
                </ul>
                {!hideCurrencyCard && (
                    <CurrencyCard/>
                )}
                {!hideAddCreditLimit && (
                    <div className={styles.wrap_aboutLimit}>
                        <AddCreditLimit selectedCard={selectedCard}/>
                    </div>
                )}
                {showOnlyButtons && (
                    <div className={styles.wrap_aboutLimit}>
                        <AddCreditLimit onlyNavigationButtons={true}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CreditLimit;