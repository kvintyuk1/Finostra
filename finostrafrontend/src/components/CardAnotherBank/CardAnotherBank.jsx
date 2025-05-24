import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./cardAnotherBank.module.css";

import { LanguageContext } from "../LanguageContext";
import { cardAnotherBankTranslations } from "./cardAnotherBankTranslations";

import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { useDispatch } from "react-redux";
import { createBankCard } from "../../redux/slices/bankCardSlice";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

function CardAnotherBank({ isDarkMode }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const { title, info } =
    cardAnotherBankTranslations[selectedLanguage] ||
    cardAnotherBankTranslations.UA;

  const dispatch = useDispatch();

  /* ---------- local state ---------- */
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // "VISA" | "MASTERCARD"
  const [isCreating, setIsCreating] = useState(false);
  /* --------------------------------- */

  /* ---- confirm inside the modal ---- */
  const handleConfirmCreate = async () => {
    if (!selectedType) return;

    try {
      setIsCreating(true);

      await dispatch(
        createBankCard({ currency: "UAH", cardType: selectedType })
      ).unwrap();

      /* тримаємо спінер рівно 4 с */
      setTimeout(() => {
        setIsCreating(false);
        setShowModal(false);
        setSelectedType("");
        toast.success("Картку успішно створено");
      }, 4000);
    } catch (err) {
      setIsCreating(false);
      toast.error("Не вдалося створити картку");
    }
  };

  /* ---- модальне JSX ---- */
  const modalJSX = showModal && (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Оберіть тип картки</h2>

        {isCreating ? (
          <div className={styles.spinnerBox}>
            <SpinnerCircular size={100} thickness={140} />
            <span>Створення картки…</span>
          </div>
        ) : (
          <>
            <div className={styles.options}>
              {["VISA", "MASTERCARD"].map((type) => (
                <label
                  key={type}
                  className={
                    selectedType === type
                      ? styles.optionChecked
                      : styles.option
                  }
                >
                  <input
                    type="radio"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className={styles.btnRow}>
              <button
                className={styles.btnPrimary}
                disabled={!selectedType}
                onClick={handleConfirmCreate}
              >
                Створити
              </button>
              <button
                className={styles.btnSecondary}
                onClick={() => {
                  setShowModal(false);
                  setSelectedType("");
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
    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      {/* ---------- портал модалки ---------- */}
      {ReactDOM.createPortal(modalJSX, document.getElementById("modal-root"))}
      {/* ------------------------------------ */}

      <div className={styles.container}>
        <div className={styles.info_star}>
          <div className={styles.wrapper_info}>
            <div className={styles.title}>
              <span>{title}</span>
            </div>

            <div className={styles.info}>
              <img src="/img/anotherCard.jpg" alt="" />
              <div>{info}</div>
            </div>

            <ButtonForCard
              title_button="Додати картку"
              sizeButton="size_button188"
              onClick={() => setShowModal(true)}
              disabled={isCreating}
            />
          </div>

          <img src="/img/star3.png" alt="star" />
        </div>
      </div>
    </div>
  );
}

export default CardAnotherBank;
