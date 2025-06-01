import React, {useContext} from 'react';
import styles from './moneyBox.module.css';
import TransferToCardInfo from "../../components/TransferToCardInfo/TransferToCardInfo";
import ServiceMoneyBox from "../../components/ServiceMoneyBox/ServiceMoneyBox";
import BuyingPartsEasy from "../../components/BuyingPartsEasy/BuyingPartsEasy";
import {LanguageContext} from "../../components/LanguageContext";
import {moneyBoxTranslation} from "./moneyBoxTranslation";
import Questions from "../../components/Questions/Questions";
import RulesMoneyBox from "../../components/RulesMoneyBox/RulesMoneyBox";

function MoneyBox() {
    const {selectedLanguage} = useContext(LanguageContext);
    const tParts = moneyBoxTranslation[selectedLanguage];

    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="moneybox"
                title="Скарбничка"
                subtitle="Простий і зручний сервіс мікронакопичень."
            />
            <ServiceMoneyBox/>
            <BuyingPartsEasy
                containerTitle={tParts.containerTitle}
                items={tParts.items}
                hideTitle={true}
            />
            <RulesMoneyBox/>
            <Questions
                sizeContent="height_content363"
                sizeWrapper="height_wrap283"
                questionsData={tParts.questions}
            />
        </div>
    )
}

export default MoneyBox;