import React, {useContext} from "react";
import styles from "./digitalBankCard.module.css";
import {LanguageContext} from "../LanguageContext";
import {digitalBankCardTranslations} from "./digitalBankCardTranslations";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import {useNavigate} from "react-router-dom";

function DigitalBankCard({isDarkMode}) {
    const {selectedLanguage} = useContext(LanguageContext);
    const {title, list} =
    digitalBankCardTranslations[selectedLanguage] || digitalBankCardTranslations.UA;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/cards/digitalCard");
    }


    return (
        <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
            <div className={styles.container}>
                <div className={styles.wrapper_content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.info}>
                        <img src="./img/finostra_card.jpg" alt=""/>
                        <ul>
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <ButtonForCard
                        title_button="Переглянути картки"
                        sizeButton="size_button188"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default DigitalBankCard;
