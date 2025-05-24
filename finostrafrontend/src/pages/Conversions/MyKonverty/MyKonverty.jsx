import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./myKonverty.module.css";
import MyConversions from "../../../components/MyConversions/MyConversions";
import CollectingMoney from "../../../components/CollectingMoney/CollectingMoney";
import CurrencyConverter from "../../../components/CurrencyConverter/CurrencyConverter";

import {
  topUpEnvelop,
  extractMoneyFromEnvelop,
} from "../../../redux/slices/envelopSlice";
import { fetchUserCards } from "../../../redux/slices/bankCardSlice";

const mask = (n) => n.replace(/(\d{4})\s\d{4}\s(\d{4})/, "$1 •••• $2");

function OperationModal({ type, env, onClose }) {
  const dispatch = useDispatch();
  const { cards, status } = useSelector((s) => s.bankCard);

  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "idle") dispatch(fetchUserCards());
  }, [dispatch, status]);

  const maxTopUp = env.amountCapacity - env.actualAmount;

  const submit = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);

    if (!cardNumber) return setError("Виберіть картку");
    if (isNaN(val) || val <= 0) return setError("Невірна сума");
    if (type === "topUp" && val > maxTopUp) return setError(`Максимум ${maxTopUp}`);
    if (type === "extract" && val > env.actualAmount) return setError("Недостатньо коштів");

    const payload = {
      name: env.name,
      capacity: env.amountCapacity,
      cardNumber,
      amount: val,
    };

    type === "topUp"
      ? dispatch(topUpEnvelop(payload))
      : dispatch(extractMoneyFromEnvelop(payload));

    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>
          {type === "topUp" ? "Поповнити" : "Вилучити"} конверт
        </h2>
        <p className={styles.envName}>{env.name}</p>

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
            {status === "succeeded" &&
              cards.map((c) => (
                <option key={c.cardNumber} value={c.cardNumber}>
                  {mask(c.cardNumber)} · {c.balance.amount} {c.balance.currency}
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
            <button type="button" className={styles.btnSecondary} onClick={onClose}>
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function MyKonverty() {
  const [showList, setShowList] = useState(true);
  const [envModal, setEnvModal] = useState(null);

  const open = (env, t) => setEnvModal({ env, type: t });
  const close = () => setEnvModal(null);

  return (
    <div className={styles.container}>
      {showList ? (
        <MyConversions
          setShowKonvert={setShowList}
          onTopUp={(e) => open(e, "topUp")}
          onExtract={(e) => open(e, "extract")}
        />
      ) : (
        <div className={styles.wrapper_component}>
          <CollectingMoney setShowKonvert={setShowList} />
          <CurrencyConverter />
        </div>
      )}

      {envModal && (
        <OperationModal type={envModal.type} env={envModal.env} onClose={close} />
      )}
    </div>
  );
}

export default MyKonverty;
