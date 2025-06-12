import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";

import styles from "./myKonverty.module.css";
import MyConversions from "../../../components/MyConversions/MyConversions";
import CollectingMoney from "../../../components/CollectingMoney/CollectingMoney";
import CurrencyConverter from "../../../components/CurrencyConverter/CurrencyConverter";

import {
  topUpEnvelop,
  extractMoneyFromEnvelop,
  fetchAllEnvelops,
} from "../../../redux/slices/envelopSlice";
import { fetchUserCards } from "../../../redux/slices/bankCardSlice";

function OperationModal({ type, env, onClose }) {
  const dispatch = useDispatch();
  const { cards, status: cardsStatus } = useSelector((s) => s.bankCard);
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (cardsStatus === "idle") {
      dispatch(fetchUserCards());
    }
  }, [dispatch, cardsStatus]);

  const maxTopUp = env.capacityAmount - env.actualAmount;
  const percent = env.capacityAmount
    ? Math.min(100, (env.actualAmount / env.capacityAmount) * 100)
    : 0;

  const submit = async (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!cardNumber) return setError("Виберіть картку");
    if (isNaN(val) || val <= 0) return setError("Невірна сума");
    if (type === "topUp" && val > maxTopUp)
      return setError(`Максимум ${maxTopUp}`);
    if (type === "extract" && val > env.actualAmount)
      return setError("Недостатньо коштів");

    const payload = {
      name: env.name,
      capacity: env.capacityAmount,
      cardNumber,
      amount: val,
    };

    try {
      if (type === "topUp") {
        await dispatch(topUpEnvelop(payload)).unwrap();
      } else {
        await dispatch(extractMoneyFromEnvelop(payload)).unwrap();
      }
      await dispatch(fetchAllEnvelops());
      onClose();
    } catch (err) {
      setError("Помилка операції");
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>
          {type === "topUp" ? "Поповнити" : "Вилучити"} конверт
        </h2>
        <p className={styles.envName}>{env.name}</p>
        <div className={styles.progressBox}>
          <span>
            {env.actualAmount} / {env.capacityAmount} ({Math.round(percent)}%)
          </span>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%`, backgroundColor: "limegreen" }}
            />
          </div>
        </div>
        <form onSubmit={submit} className={styles.form}>
          <select
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
              setError("");
            }}
            className={styles.select}
          >
            <option value="">Картка</option>
            {cardsStatus === "succeeded" &&
              cards.map((c) => (
                <option key={c.cardNumber} value={c.cardNumber}>
                  {c.cardNumber} · {c.balance.amount} {c.balance.currency}
                </option>
              ))}
          </select>
          <input
            type="number"
            step="0.01"
            placeholder="Сума"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
            className={styles.input}
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.btnRow}>
            <button type="submit" className={styles.btnPrimary}>
              Підтвердити
            </button>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={onClose}
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function MyKonverty() {
  const dispatch = useDispatch();
  const { status, error: envelopError } = useSelector((s) => s.envelop);
  const [showList, setShowList] = useState(true);
  const [envModal, setEnvModal] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllEnvelops());
    }
  }, [dispatch, status]);

  const open = (env, t) => setEnvModal({ env, type: t });
  const close = () => setEnvModal(null);

  return (
    <div className={styles.container}>
      {showList ? (
        status !== "succeeded" ? (
          <div className={styles.loaderWrapper}>
            <SpinnerCircular size={100} thickness={140} />
            <span>Завантаження конвертів…</span>
          </div>
        ) : (
          <MyConversions
            setShowKonvert={setShowList}
            onTopUp={(e) => open(e, "topUp")}
            onExtract={(e) => open(e, "extract")}
          />
        )
      ) : (
        <div className={styles.wrapper_component}>
          <CollectingMoney setShowKonvert={setShowList} />
          <CurrencyConverter />
        </div>
      )}

      {envModal && (
        <OperationModal
          type={envModal.type}
          env={envModal.env}
          onClose={close}
        />
      )}
    </div>
  );
}
