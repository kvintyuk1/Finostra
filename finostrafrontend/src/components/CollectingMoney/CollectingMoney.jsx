import React, { useState } from "react";
import styles from "./collectingMoney.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { useDispatch, useSelector } from "react-redux";
import { createEnvelop, fetchAllEnvelops } from "../../redux/slices/envelopSlice";

function CollectingMoney({ setShowKonvert }) {
  const dispatch = useDispatch();
  const { createStatus, createError, message } = useSelector((state) => state.envelop);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amountCapacity, setAmountCapacity] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); 
  const [currency, setCurrency] = useState("UAH");
  const [preset, setPreset] = useState("");

  const currencies = ["UAH", "USD", "EUR"];

  const handleSubmit = async () => {
    const data = { name, description, amountCapacity: +amountCapacity, expiryDate, currency };
    try {
      await dispatch(createEnvelop(data)).unwrap();
      dispatch(fetchAllEnvelops());
      setShowKonvert(true);
    } catch {
    }
  };

  const handlePreset = (label, computeDate) => {
    setPreset(label);
    const d = new Date();
    computeDate(d);
    const iso = d.toISOString().slice(0, 10);
    setExpiryDate(iso);
    console.log(`Preset "${label}" встановлено:`, iso);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap_languages_button}>
        {currencies.map((cur) => (
          <ButtonForCard
            key={cur}
            title_button={cur}
            sizeButton="size_button68"
            fontWeight="fontWeight400"
            onClick={() => setCurrency(cur)}
            isActive={currency === cur}
          />
        ))}
      </div>

      <div className={styles.wrapper_content}>
        <div className={styles.wrap_name}>
          <div className={styles.wrap_title}>
            <div className={styles.title}>Назва</div>
            <input
              type="text"
              value={name}
              maxLength={45}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Виберіть або напишіть назву"
            />
          </div>
          <div className={styles.count}>{name.length}/45</div>
        </div>

        <div className={styles.wrap_sum_money_collected}>
          <div className={styles.wrap_sum_input}>
            <div className={styles.title_collected}>Сума збору</div>
            <input
              type="number"
              value={amountCapacity}
              onChange={(e) => setAmountCapacity(e.target.value)}
              className={styles.input_sum}
              placeholder="00.00"
            />
          </div>
          <div className={styles.wrap_info_collected}>
            <div className={styles.info_collected}>
              <img src="/icons/info_percent24.svg" alt="info" />
              <div className={styles.title_info}>Після досягнення суми збору</div>
            </div>
            <div className={styles.description_info}>Ви можете продовжити накопичення або</div>
            <div className={styles.description_info}>Вивести кошти з Конверта</div>
          </div>
        </div>

        <div className={styles.wrap_additionally}>
          <div className={styles.title_additionally}>Додатково</div>
          <div className={styles.wrap_description}>
            <div className={styles.title_description}>Опис</div>
            <input
              type="text"
              value={description}
              maxLength={300}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.input}
              placeholder="Напишіть опис"
            />
            <div className={styles.count}>{description.length}/300</div>
          </div>
        </div>

        <div className={styles.wrap_date_finish}>
          <div className={styles.title_data}>Дата закінчення збору</div>
          <div className={styles.wrap_data_buttons}>
            <ButtonForCard
              title_button="Місяць"
              fontWeight="fontWeight400"
              sizeButton="size_button68"
              onClick={() => handlePreset("Місяць", (d) => d.setMonth(d.getMonth() + 1))}
              isActive={preset === "Місяць"}
            />
            <ButtonForCard
              title_button="Пів року"
              fontWeight="fontWeight400"
              sizeButton="size_button68"
              onClick={() => handlePreset("Пів року", (d) => d.setMonth(d.getMonth() + 6))}
              isActive={preset === "Пів року"}
            />
            <ButtonForCard
              title_button="Рік"
              fontWeight="fontWeight400"
              sizeButton="size_button68"
              onClick={() => handlePreset("Рік", (d) => d.setFullYear(d.getFullYear() + 1))}
              isActive={preset === "Рік"}
            />
          </div>
          {expiryDate && (
            <div className={styles.selectedDate}>
              Обрана дата: {expiryDate}
            </div>
          )}
        </div>
      </div>

      <div className={styles.wrap_buttons}>
        <ButtonForCard
          title_button="Назад"
          sizeButton="size_button88"
          onClick={() => setShowKonvert(true)}
        />

        {createStatus === "loading" && <p>Створення...</p>}
        {createError && <p className={styles.errorText}>{createError}</p>}
        {message && <p className={styles.successText}>{message}</p>}

        <ButtonForCard
          type="button"
          title_button="Продовжити"
          sizeButton="size_button128_39"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default CollectingMoney;
