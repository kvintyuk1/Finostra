import React, { useContext } from "react";
import styles from "./cardAnotherBank.module.css";
import { LanguageContext } from "../LanguageContext";
import { cardAnotherBankTranslations } from "./cardAnotherBankTranslations";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { useDispatch } from "react-redux"
import { createBankCard } from "../../redux/slices/bankCardSlice";

function CardAnotherBank({ isDarkMode }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const { title, info, button } =
        cardAnotherBankTranslations[selectedLanguage] || cardAnotherBankTranslations.UA;

    const dispatch = useDispatch();

    const handleCreateNewCard = () => {
        try {
            const cardTypes = ["MASTERCARD", "VISA"];
            const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            dispatch(createBankCard({
                currency: "UAH",
                cardType: randomType
            }));
            alert("Created new card");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
            <div className={styles.container}>
                <div className={styles.info_star}>
                    <div className={styles.wrapper_info}>
                        <div className={styles.title}>
                            <span>{title}</span>
                        </div>
                        <div className={styles.info}>
                            <img src="./img/anotherCard.jpg" alt=" " />
                            <div>{info}</div>
                        </div>
                        <ButtonForCard
                            title_button="Додати картку"
                            sizeButton="size_button188"
                            onClick={() => { handleCreateNewCard(); }}
                        />
                    </div>
                    <div>
                        <img src="./img/star 3.png" alt="star" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardAnotherBank;
