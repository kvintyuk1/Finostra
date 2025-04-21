import React, { useContext } from "react";
import styles from "./credit_Modal.module.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";
import { creditModalTranslations } from "./creditModalTranslations";

const creditModalItems = [
  { img: "moneybag_solar", titleKey: "myCredits", path: "/credits/myCredits" },
  { img: "credit_limit", titleKey: "creditLimit", path: "/credits/creditLimit" },
  { img: "payment_installments", titleKey: "paymentInstallments", path: "/credits/paymentInstallments" },
  { img: "installment", titleKey: "instantInstallment", path: "/credit/instantInstallment" },
  { img: "credit_cash", titleKey: "creditCash", path: "/credit/creditCash" },
  { img: "credit_car", titleKey: "creditCar", path: "/credit/creditCar" },
  { img: "credit_house", titleKey: "creditHouse", path: "/credit/creditHouse" },
  { img: "mynaui_search_home", titleKey: "monitoringCollateralProperty", path: "/credit/monitoringCollateralProperty" },
  { img: "hand_deposit", titleKey: "depositSecurity", path: "/credit/depositSecurity" },
  { img: "sad", titleKey: "overdueDebts", path: "/credit/overdueDebts" },
];

function Credit_Modal({ onClose }) {
  const { selectedLanguage } = useContext(LanguageContext);
  const tModal = creditModalTranslations[selectedLanguage];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content}>
          {creditModalItems.map(({ img, titleKey, path }) => (
            <div key={titleKey} className={styles.wrapper_item}>
              <div className={styles.item}>
                <img src={`/icons/${img}.svg`} alt="" />
                <Link to={path} onClick={onClose} className={styles.link}>
                  <span className={styles.title}>{tModal[titleKey]}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credit_Modal;
