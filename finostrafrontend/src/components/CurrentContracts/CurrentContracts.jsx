import React, { useContext } from "react";
import styles from "./currentContracts.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../LanguageContext";
import { currentContractsTranslations } from "./currentContractsTranslations";
import {useNavigate} from "react-router-dom";

function CurrentContracts() {
    const { selectedLanguage } = useContext(LanguageContext);
    const tCurrentContracts = currentContractsTranslations[selectedLanguage];
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <img src="/img/contracts.png" alt=""/>
            <ButtonForCard
                title_button={tCurrentContracts.buttonTitle}
                sizeButton="size_button173"
                onClick={handleClick}
            />
        </div>
    );
}

export default CurrentContracts;
