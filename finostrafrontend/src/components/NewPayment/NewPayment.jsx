import React, { useContext, useState } from "react";
import styles from "./newPayment.module.css";
import { LanguageContext } from "../LanguageContext";
import { newPaymentTranslations } from "./newPaymentTranslations";
import { useOutletContext } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { performIbanTransaction } from "../../redux/slices/transactionSlice";

function NewPayment() {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = newPaymentTranslations[selectedLanguage] || newPaymentTranslations["UA"];
    const dispatch = useDispatch();

    const { cards, status } = useOutletContext();

    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [iban, setIban] = useState("");
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleTransfer = async () => {
        console.log(selectedCard);
        console.log(iban);
        console.log(amount);
        if (!selectedCard || !iban || amount <= 0) {
            toast.error("Будь ласка, заповніть всі поля.");
            return;
        }

        try {
            setLoading(true);

            await dispatch(performIbanTransaction({
                senderCardNumber: selectedCard.cardNumber,
                receiverIban: iban,
                amount,
                currency: "UAH",
                description: "IBAN Transaction"
            })).unwrap();

            toast.success("Переказ успішний");
            setShowModal(false);
            setSelectedCard(null);
            setIban("");
            setAmount(0);
        } catch (error) {
            toast.error(`Помилка переказу`);
        } finally {
            setLoading(false);
        }
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
                                onClick={handleTransfer}
                                disabled={!selectedCard || amount <= 0 || loading}
                            >
                                {loading ? "Надсилання…" : "Вибрати"}
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
            <div className={styles.container}>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.title}>{t.title}</div>
                        <div className={styles.subtitle}>{t.subtitle}</div>
                    </div>
                    <div className={styles.wrapper_payment}>
                        <div className={styles.input_wrapper}>
                            <img src="/icons/icon_search.svg" alt="" />
                            <input
                                type="text"
                                value={iban}
                                onChange={(e) => setIban(e.target.value)}
                                placeholder={t.placeholder}
                                className={styles.search_input}
                            />
                        </div>

                        <div className={styles.amount_input_wrapper}>
                            <input
                                type="number"
                                className={styles.amount_input}
                                placeholder={t.amountPlaceholder}
                                value={amount}
                                onChange={(e) => { setAmount(e.target.value); }}
                            />
                        </div>


                        <button
                            className={styles.sendBtn}
                            onClick={() => {
                                if (iban.length <= 0) {
                                    toast.info(t.placeholder);
                                    return;
                                }
                                setShowModal(true);
                            }}
                        >
                            {t.send}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPayment;
