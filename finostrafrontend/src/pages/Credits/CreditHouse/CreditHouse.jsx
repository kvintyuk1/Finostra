import React from "react";
import styles from "./creditHouse.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Questions from "../../../components/Questions/Questions";
import InfoHouseCredit from "../../../components/InfoHouseCredit/InfoHouseCredit";
import InfoTabsHouseCredit from "../../../components/InfoTabsHouseCredit/InfoTabsHouseCredit";

const questionsData6 = [
    {question: "Чи можна отримати прописку за програмою «Житло в кредит»?", img: "arrow_down16"},
    {question: "Який аванс передбачено за придбання нерухомості за програмою «Житло в кредит»?", img: "arrow_down16"},
    {question: "Чи можлива класична форма розрахунку графіка?", img: "arrow_down16"},
]

function CreditHouse() {
    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="house_credit"
                title="Житло в кредит"
                subtitle="Іпотечне кредитування"
            />
            <InfoHouseCredit/>
            <InfoTabsHouseCredit/>
            <Questions
                sizeContent="height_content299"
                sizeWrapper="height_wrap219"
                questionsData={questionsData6}
            />
        </div>
    );
}

export default CreditHouse;