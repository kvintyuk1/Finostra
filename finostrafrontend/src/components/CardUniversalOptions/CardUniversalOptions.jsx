import React, {useContext, useState} from "react";
import styles from "./cardUniversalOptions.module.css";
import LineVerticalDotted from "../for card/ LineVerticalDotted/LineVerticalDotted";
import LimitFilter from "../LimitFilter/LimitFilter";
import {LanguageContext} from "../LanguageContext";
import {cardUniversalOptionsTranslations} from "./cardUniversalOptionsTranslations";
import {useOutletContext} from "react-router-dom";

function CardUniversalOptions() {
    const {selectedLanguage} = useContext(LanguageContext);
    const t = cardUniversalOptionsTranslations[selectedLanguage];
    const {creditLimit,setCreditLimit,isEditing,setIsEditing} = useOutletContext();

    const handleCreditLimitChange = (newLimit)=>{
        setCreditLimit(newLimit);
    };
    const toggleEditing = ()=>{
        setIsEditing((prev)=> !prev);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_cardInfo}>
                <button className={styles.wrap_but_setting}>
                    <div className={styles.title_but}>{t.universalCard}</div>
                    <div className={styles.wrapper_setting}>
                        <img src="/icons/repeat_pink.svg" alt=""/>
                        <img src="/icons/analytics.svg" alt=""/>
                        <img src="/icons/double_arrow.svg" alt=""/>
                        <img src="/icons/document.svg" alt=""/>
                        <img src="/icons/settings.svg" alt=""/>
                    </div>
                </button>

                <div className={styles.wrapper_account_card}>
                    <div className={styles.wrap_number_card}>
                        <div className={styles.wrap_number_cardInfo}>
                            <div className={styles.wrap_item}>
                                <div>4441 **** **** 1234</div>
                            </div>
                            <div className={styles.wrap_item_number}>
                                <div className={styles.number}>01/25</div>
                                <div className={styles.number}>CW</div>
                            </div>
                        </div>

                        {/* лінія й IBAN-блок із HEAD */}
                        <LineVerticalDotted heightLine="height73"/>
                        <div className={styles.wrap_number_accountInfo}>
                            <div className={styles.wrap_iban}>
                                <div className={styles.number}>IBAN</div>
                                <img src="/icons/information_iban.svg" alt=""/>
                            </div>
                            <div className={styles.wrap_number}>
                                <div>UA92 123456 1234 5678 901 1010101</div>
                                <img src="/icons/copy_number.svg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.wrap_money_info}>
                        <div className={styles.wrap_item_info}>
                            <div>{t.ownFunds}</div>
                            <div>6345.00 UAH</div>
                        </div>
                        <div className={styles.wrap_item_info}>
                            <div>{t.available}</div>
                            <div>6345.00 UAH</div>
                        </div>
                        <div className={styles.wrap_item_info}>
                            <div>{t.accountLimit}</div>
                            <div className={styles.color_number}>0 UAH</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* оригінальний зовнішній блок зміни ліміту */}
            <div className={styles.wrapper_changeCreditLimit}>
                <button onClick={toggleEditing} className={styles.but_limit}>
                    <span className={styles.title_but_limit}>{t.creditLimitChange}</span>
                </button>
                <div className={styles.wrapper_creditLimit}>
                    <div className={styles.wrap_limit_info}>
                        <div className={styles.limit_info}>
                            <div className={styles.wrap_item_info}>
                                <div>{t.currentCardNumber}</div>
                                <div>{creditLimit} UAH</div>
                            </div>
                            <div className={styles.wrap_item_info}>
                                <div>{t.currentDebt}</div>
                                <div>0 UAH</div>
                            </div>
                        </div>
                        <div className={styles.wrapper_filter}>
                            <LimitFilter
                                hideLabelSuffix={true}
                                value={creditLimit}
                                onChange={handleCreditLimitChange}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.wrapper_current_limit}>
                            <button className={styles.but_lim}></button>
                            <span className={styles.text}>{t.currentLimit}</span>
                        </div>
                        <div className={styles.wrapper_debt}>
                            <button className={styles.but_debt}></button>
                            <span className={styles.text}>{t.debt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUniversalOptions;
