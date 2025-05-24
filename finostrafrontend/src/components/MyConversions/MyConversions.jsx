import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./myConversions.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import { fetchAllEnvelops } from "../../redux/slices/envelopSlice";

export default function MyConversions({ setShowKonvert }) {
  const dispatch = useDispatch();
  const { status, error, envelops } = useSelector((state) => state.envelop);

  const [activeButton, setActiveButton] = useState("sent");
  const [showArchiv, setShowArchiv] = useState(false);

  useEffect(() => {
    dispatch(fetchAllEnvelops());
  }, [dispatch]);

  const items = envelops?.dtos || [];
  const displayed = items.filter((env) => (showArchiv ? !env.isEnabled : env.isEnabled));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>Мої конверти</div>
        <SentReceivedSwitch
          text_but_one="Власник"
          text_but_two="Учасник"
          widthContainer="width172"
          active={activeButton}
          onChange={setActiveButton}
        />
      </div>

      <div className={styles.wrap_content}>
        {status === "loading" && <p>Завантаження конвертів...</p>}
        {error && <p className={styles.errorText}>{error}</p>}

        {status === "succeeded" && (
          displayed.length > 0 ? (
            <div className={styles.grid}>
              {displayed.map((env) => (
                <div key={env.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{env.name}</h3>
                    <span className={styles.progress}>
                      {env.actualAmount} / {env.capacityAmount} {env.currency}
                    </span>
                  </div>
                  <p className={styles.cardDesc}>{env.description}</p>
                  <div className={styles.cardFooter}>
                    Завершення: <strong>{env.expiryDate}</strong>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.wrap_describe}>
              <div className={styles.title}>
                {showArchiv
                  ? "У вас немає заархівованих конвертів"
                  : activeButton === "sent"
                  ? "Створіть конверт для керування витратами"
                  : "Тут відображатимуться ваші участі у конвертах"}
              </div>
              <div className={styles.description}>
                {showArchiv
                  ? "Архівуйте завершені конверти, щоб вони показувалися тут."
                  : activeButton === "sent"
                  ? "Натисніть ‘Створити конверт’, щоб почати накопичення або розподіл коштів."
                  : "Прийміть запрошення, щоб приєднатися до збору коштів."}
              </div>
            </div>
          )
        )}
      </div>

      <div className={styles.wrap_buttons}>
        <ButtonForCard
          img="/icons/add_konvert.svg"
          title_button="Створити конверт"
          sizeButton="size_button200"
          onClick={() => setShowKonvert(false)}
        />
        <ButtonForCard
          img="/icons/download16.svg"
          title_button="Архів"
          sizeButton="size_button103"
          onClick={() => setShowArchiv((prev) => !prev)}
          isActive={showArchiv}
        />
      </div>
    </div>
  );
}