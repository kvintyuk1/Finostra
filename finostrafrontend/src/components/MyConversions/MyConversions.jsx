import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./myConversions.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import SentReceivedSwitch from "../SentReceivedSwitch/SentReceivedSwitch";
import { fetchAllEnvelops } from "../../redux/slices/envelopSlice";

export default function MyConversions({
  setShowKonvert,
  onTopUp = () => {},
  onExtract = () => {},
}) {
  const dispatch = useDispatch();
  const { status, error, envelops } = useSelector((s) => s.envelop);

  const [activeButton, setActiveButton] = useState("sent");
  const [showArchiv, setShowArchiv] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const items = envelops?.dtos || [];
  const displayed = items.filter((env) =>
    showArchiv ? !env.enabled : env.enabled
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.container} ${isExpanded ? styles.expanded : ""}`}>
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

      <div
        className={`${styles.wrap_content} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        {status === "loading" && <p>Завантаження конвертів...</p>}
        {error && <p className={styles.errorText}>{error}</p>}

        {status === "succeeded" &&
          (displayed.length ? (
            <>
              <div
                className={`${styles.grid} ${
                  isExpanded ? styles.expanded : ""
                }`}
              >
                {displayed.map((env, idx) => (
                  <div key={env.id ?? idx} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardName}>{env.name}</h3>
                      <p className={styles.cardDesc}>{env.description}</p>
                    </div>

                    <div className={styles.progressBox}>
                      <span>
                        {env.actualAmount} / {env.capacityAmount}
                      </span>
                      <div className={styles.progressTrack}>
                        <div
                          className={styles.progressFill}
                          style={{
                            width: `${
                              env.capacity
                                ? Math.min(
                                    100,
                                    (env.actualAmount / env.capacity) * 100
                                  )
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <button
                        className={styles.btnTopUp}
                        onClick={() => onTopUp(env)}
                      >
                        Поповнити
                      </button>
                      <button
                        className={styles.btnExtract}
                        onClick={() => onExtract(env)}
                      >
                        Вилучити
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {displayed.length > 6 && (
                <button
                  className={`${styles.expandButton} ${
                    isExpanded ? styles.expanded : ""
                  }`}
                  onClick={toggleExpand}
                >
                  {isExpanded ? "Згорнути" : "Показати всі"}
                  <svg
                    className={styles.expandIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </button>
              )}
            </>
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
                  ? "Натисніть 'Створити конверт', щоб почати накопичення або розподіл коштів."
                  : "Прийміть запрошення, щоб приєднатися до збору коштів."}
              </div>
            </div>
          ))}
      </div>

      <div className={styles.wrap_buttons}>
        <ButtonForCard
          img="add_konvert"
          title_button="Створити конверт"
          sizeButton="size_button200"
          onClick={() => setShowKonvert(false)}
        />
        <ButtonForCard
          img="download16"
          title_button="Архів"
          sizeButton="size_button103"
          onClick={() => setShowArchiv((prev) => !prev)}
          isActive={showArchiv}
        />
      </div>
    </div>
  );
}
