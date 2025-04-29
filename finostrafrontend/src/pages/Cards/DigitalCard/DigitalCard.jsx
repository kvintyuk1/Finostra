import React, {useState} from "react";
import styles from "./digitalCard.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import TypeDiginalCard from "../../../components/TypeDigitalCard/TypeDigitalCard";
import PaymentSystem from "../../../components/PaymentSystem/PaymentSystem";
import CreditLimit from "../../../components/CreditLimit/CreditLimit";
import CurrencyCard from "../../../components/CurrencyCard/CurrencyCard";

function DigitalCard() {
    const [selectedType,setSelectedType] = useState("Кредитна");
    const [selectedCard, setSelectedCard] = useState("yellow");
    const [paymentSystem,setPaymentSystem] = useState("visa");
    const [showActive,setShowActive] = useState("visa");

    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="add_digital_card"
                title="Додавання картки"
            />
            <div className={styles.wrapper_info_digitalCard}>
                <TypeDiginalCard
                selectedType={selectedType}
                onSelectType={setSelectedType}
                />
                <PaymentSystem
                    selectedCard={selectedCard}
                    onSelectCard={setSelectedCard}
                    selectedPaymentSystem={paymentSystem}
                    onSelectPaymentSystem={setPaymentSystem}
                    selectedShowActive={showActive}
                    onSelectShowActive={setShowActive}
                />
                {selectedType === "Кредитна" && (
                   <>
                       {selectedCard === "yellow" && (
                           <CreditLimit
                               hideAddCreditLimit={false}
                               selectedCard="widthCard281"
                               text1="Кредитний ліміт до 200 000 UAN"
                               text2="Пільговий період 55 днів"
                               text3="Оплата покупок та послуг без комісій, у тому числі з Apple Pay та Google Pay"
                           />
                       )}
                       {selectedCard === "pink" && (
                           <CreditLimit
                               hideAttention={false}
                               hideAddCreditLimit={false}
                               sizeContainer="heightContainer544"
                               heightContent="heightContent485"
                               text1="Кредитний ліміт до 200 000 UAN"
                               text2="Знижена процентна ставка(34%)"
                               text3="Оплата покупок та послуг без комісій, у тому числі з Apple Pay та Google Pay"
                               hideCurrencyCard={false}
                           />
                       )}
                   </>
                )}
                {selectedType === "Дебетова" && (
                    <>
                        {selectedCard === "yellow" && (
                            <CreditLimit
                                hideAddCreditLimit={true}
                                hideCurrencyCard={false}
                                showOnlyButtons={true}
                                gap_content="gapContent40"
                                sizeContainer="heightContainer289"
                                heightContent="heightContent230"
                                selectedCard="widthCard281"
                                text1="Зняття готівки по картках в валюті UAH в будь-якому банкоматі ПриватБанку"
                                text2="Оплата покупок та послуг без комісій, у тому числі з Apple Pay та Google Pay"
                            />
                        )}
                        {selectedCard === "pink" && (
                            <CreditLimit
                                hideAttention={false}
                                hideAddCreditLimit={true}
                                hideCurrencyCard={false}
                                showOnlyButtons={true}
                                gap_content="gapContent40"
                                sizeContainer="heightContainer289"
                                heightContent="heightContent230"
                                selectedCard="widthCard281"
                                text1="Зняття готівки по картках в валюті UAH в будь-якому банкоматі ПриватБанку"
                                text2="Оплата покупок та послуг без комісій, у тому числі з Apple Pay та Google Pay"
                            />
                        )}
                    </>
                )}

            </div>
        </div>
    );
}

export default DigitalCard;