import React, { useState } from "react";
import styles from "./headerForCard.module.css";
import { useOutletContext } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

function HeaderForCard({ title, title_wallet, img, titleColor = "pinkText", textTransform = "normal",
    sizeWrapperTitle = "size429", setSenderCardNumber, setExpiry, setCvv, setBalanceAmount = null }) {

    const { cards, status } = useOutletContext();

    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState("");
    const [isLoadingCards, setIsLoadingCards] = useState(false);

    const handleConfirmCardSelect = () => {

        setSenderCardNumber(selectedCard.cardNumber);

        setCvv(selectedCard.CVV);

        if (setBalanceAmount)
            setBalanceAmount(selectedCard.balance.amount);

        const expiryDate = selectedCard.expired;
        const [year, month] = expiryDate.split("-");
        const formattedExpiry = `${month}/${year.slice(2)}`;

        setExpiry(formattedExpiry);

        setShowModal(false);
    };


    const modalJSX = showModal && (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <h2 className={styles.modalTitle}>Оберіть картку</h2>

                {status === 'loading' ? (
                    <div className={styles.spinnerBox}>
                        <SpinnerCircular size={100} thickness={140} />
                        <span>Завантаження карток…</span>
                    </div>
                ) : (
                    <>
                        <div className={styles.options}>
                            {cards.map((card, index) => (
                                <label
                                    key={index}
                                    className={
                                        selectedCard?.cardNumber === card.cardNumber
                                            ? styles.optionChecked
                                            : styles.option
                                    }
                                >
                                    <input
                                        type="radio"
                                        value={card.cardNumber}
                                        checked={selectedCard?.cardNumber === card.cardNumber}
                                        onChange={() => setSelectedCard(card)}
                                    />
                                    {card.cardNumber.slice(-4).padStart(16, "•")}  {card.balance.amount} {card.balance.currency}
                                </label>
                            ))}
                        </div>

                        <div className={styles.btnRow}>
                            <button
                                className={styles.btnPrimary}
                                disabled={!selectedCard}
                                onClick={handleConfirmCardSelect}
                            >
                                Вибрати
                            </button>
                            <button
                                className={styles.btnSecondary}
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedCard(null);
                                }}
                            >
                                Скасувати
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );


    return (
        <div>
            {modalJSX}
            <div className={`${styles.wrapper_title} ${styles[sizeWrapperTitle]}`}>
                <div className={styles.title}>{title}</div>
                <div className={styles.my_wallet}>
                    <span className={`${styles.title_wallet} ${styles[titleColor]} 
                      ${styles[textTransform]}`} onClick={() => { setShowModal(true) }}>{title_wallet}</span>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeaderForCard;