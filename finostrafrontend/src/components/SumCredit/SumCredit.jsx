import React, {useEffect, useState} from "react";
import styles from "./sumCredit.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import InfoSumCredit from "../InfoSumCredit/InfoSumCredit";

const termItems = [
    {number: "10"},
    {number: "20"},
    {number: "60"},
    {number: "36"},
];

function SumCredit({
                       carPrice, setCarPrice, downPayment, setDownPayment, handleSubmitCarCredit, marginContainer = "marginTop0",
                       heightSumCreditContainer = "height362", heightWrapSumCredit = "heightWrap234",
                       hideInfoTermCredit = false, hideInfoSumCredit = true,
                       infoCreditData = [], name, info, name2, info2, sizeButton, title_button
                   }) {
    const [activeTerm, setActiveTerm] = useState(null);

    return (
        <div className={`${styles.container} ${styles[heightSumCreditContainer]} ${styles[marginContainer]}`}>
            <div className={`${styles.wrap_sumCredit} ${styles[heightWrapSumCredit]}`}>
                <div className={styles.wrap_itemCredit}>
                    <InfoSumCredit
                        name={name}
                        info={info}
                        value={carPrice}
                        setValue={setCarPrice}
                    />
                    {!hideInfoSumCredit && (<InfoSumCredit
                        name={name2}
                        info={info2}
                        value={downPayment}
                        setValue={setDownPayment}
                    />)}
                    {!hideInfoTermCredit && (
                        <div className={styles.wrap_infoTermCredit}>
                            <div className={styles.name}>Строк кредиту, міс.</div>
                            <div className={styles.wrap_term}>
                                {termItems.map(({number}, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.button_term} ${activeTerm === number ? styles.active : ""}`}
                                        onClick={() => setActiveTerm(number)}
                                        onMouseEnter={() => setActiveTerm(number)}
                                        onMouseLeave={() => setActiveTerm(null)}
                                    >{number}</button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.wrap_aboutCredit}>
                    {
                        infoCreditData.map(({title, number}, index) => (
                            <div key={index} className={styles.wrap_item}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.number}>{number}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ButtonForCard
                sizeButton={sizeButton}
                title_button={title_button}
                onClick={handleSubmitCarCredit}
            />
        </div>
    );
}

export default SumCredit;

