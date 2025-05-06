import React, { useContext } from "react";
import styles from "./receiveTransfer.module.css";
import { LanguageContext } from "../LanguageContext";
import { receiveTransferTranslations } from "./receiveTransferTranslations";

const receiveItems = [
  { img: "western", name: "WesternUnion" },
  { img: "money", name: "MoneyGram" },
  { img: "ria", name: "RIA" },
  { img: "welsend", name: "Welsend" },
  { img: "meest", name: "Meest" },
  { img: "inter", name: "IntelExpress" },
  { img: "finostra_logo", name: "Finostra" },
];

function ReceiveTransfer() {
  const { selectedLanguage } = useContext(LanguageContext);
  const t =
    receiveTransferTranslations[selectedLanguage] ||
    receiveTransferTranslations["UA"];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_title}>
          <div className={styles.title}>{t.title}</div>
          <div className={styles.subtitle}>{t.subtitle}</div>
        </div>
        <div className={styles.content}>
          {receiveItems.map(({ img, name }, index) => (
            <button key={index} className={styles.wrapper_item}>
              <div className={styles.img_title}>
                <img src={`/img/${img}.png`} alt={name} />
                <div className={styles.name}>{t[name] || name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReceiveTransfer;
