import React, {useContext} from "react";
import styles from "./paymentLimitInstallments.module.css";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import CreditTerms from "../CreditTerms/CreditTerms";
import AvailableLimit from "../AvailableLimit/AvailableLimit";
import AvailableCards from "../AvailableCards/AvailableCards";
import InfoForInstallment from "../InfoForInstallment/InfoForInstallment";
import LimitFilter from "../LimitFilter/LimitFilter";
import SumCredit from "../SumCredit/SumCredit";
import {LanguageContext} from "../LanguageContext";
import {paymentLimitInstallmentsTranslations} from "./paymentLimitInstallmentsTranslations";

function PaymentLimitInstallments(props) {
    const {selectedLanguage} = useContext(LanguageContext);
    const t = paymentLimitInstallmentsTranslations[selectedLanguage]
        || paymentLimitInstallmentsTranslations["UA"];

    const {
        text_but_one = t.howUse,
        text_but_two = t.contracts,
        widthContainer,
        title_info = t.title,
        description_info = t.description,
        availableCards = t.availableCards,
        text = t.text,
        text_info = t.text_info,
        heightContainer = "height441",
        heightCard,
        sizeGap = "gap37",
        showAvailableLimit = true,
        customContent,
        replaceCreditTermsWithLimit = false,
        hideButton = false,
        hideImg = true,
        showLimitFilter = false,
        showSumCredit = false,
        infoCreditData = [],
        hideInfoSumCredit = false,
        hideInfoTermCredit = false,
        limitFilterProps = {},
        rate,
        ratePercent,
        term,
        termCredit,
        sumCredit,
        numberCredit,
        hideLineVerticalDotted = false,
        hideAvailableLimit = false,
        widthPay = "widthPayNow519",
        gapPayNow = "gapPayNow28",
        widthWrapperInfo = "widthWrapperInfo519",
        heightWrapperInfo = "heightWrapperInfo361",
        gapContainer = "gap153",
        marginContainer,
        widthWrapRate,
        name,
        info,
        name2,
        info2,
        heightSumCreditContainer,
        heightWrapSumCredit,
        title_button,
        sizeButton,
        activeButton,
        setActiveButton,
        carPrice,
        setCarPrice,
        downPayment,
        setDownPayment,
        handleSubmitCarCredit
    } = props;

    return (
        <div className={`${styles.container} ${styles[heightContainer]} ${styles[gapContainer]}`}>
            <div
                className={`${styles.wrapper_info} ${styles[widthWrapperInfo]} ${styles[heightWrapperInfo]} ${styles[sizeGap]}`}>
                <div className={styles.wrapper_howUsePayment}>
                    <SentReceivedSwitch
                        text_but_one={text_but_one}
                        text_but_two={text_but_two}
                        widthContainer={widthContainer}
                        active={activeButton}
                        onChange={setActiveButton}
                    />
                    <div className={`${styles.wrapper_payNow} ${styles[widthPay]} ${styles[gapPayNow]}`}>
                        <InfoForInstallment
                            title_info={title_info}
                            description_info={description_info}
                        />
                        {replaceCreditTermsWithLimit ? (
                            <AvailableLimit hideButton={hideButton} hideImg={hideImg}/>
                        ) : (
                            <CreditTerms
                                rate={rate}
                                ratePercent={ratePercent}
                                term={term}
                                termCredit={termCredit}
                                sumCredit={sumCredit}
                                numberCredit={numberCredit}
                                hideLineVerticalDotted={hideLineVerticalDotted}
                                widthWrapRate={widthWrapRate}
                            />
                        )}
                    </div>
                </div>

                {!hideAvailableLimit && !replaceCreditTermsWithLimit && showAvailableLimit && !customContent && (
                    <AvailableLimit/>
                )}

                {customContent}

                {showLimitFilter && (
                    <LimitFilter
                        {...limitFilterProps}
                        hideRightLabel
                        hideLabelSuffix={limitFilterProps.hideLabelSuffix}
                        hideFilterLabelSuffix={limitFilterProps.hideFilterLabelSuffix}
                        sizeLimit
                    />
                )}
            </div>

            <div className={styles.wrapper_cards}>
                {showSumCredit ? (
                    <SumCredit
                        infoCreditData={infoCreditData}
                        hideInfoTermCredit={hideInfoTermCredit}
                        hideInfoSumCredit={hideInfoSumCredit}
                        name={name}
                        info={info}
                        name2={name2}
                        info2={info2}
                        marginContainer={marginContainer}
                        heightSumCreditContainer={heightSumCreditContainer}
                        heightWrapSumCredit={heightWrapSumCredit}
                        title_button={title_button}
                        sizeButton={sizeButton}
                        carPrice={carPrice}
                        setCarPrice={setCarPrice}
                        downPayment={downPayment}
                        setDownPayment={setDownPayment}
                        handleSubmitCarCredit={handleSubmitCarCredit}
                    />
                ) : (
                    <>
                        <AvailableCards
                            availableCards={t.availableCards}
                            text={t.text}
                            text_info={t.text_info}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
export default PaymentLimitInstallments