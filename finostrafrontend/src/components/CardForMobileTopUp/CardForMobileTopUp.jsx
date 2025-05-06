import React, { useState, useContext } from "react";
import styles from "./cardForMobileTopUp.module.css";
import PhoneNumber from "../for card/PhoneNumber/PhoneNumber";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import WalletCard from "../WalletCard/WalletCard";
import HeaderForCard from "../for card/HeaderForCard/HeaderForCard";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import RegistrationPayoneer_Modal from "../modals/RegistrationPayoneer_Modal/RegistrationPayoneer_Modal";
import SuccessfulMobileTopUp_Modal from "../modals/SuccessfulMobileTopUp_Modal/SuccessfulMobileTopUp_Modal";
import { LanguageContext } from "../LanguageContext"; 
import { cardForMobileTopUpTranslations } from "./cardForMobileTopUpTranslations"; 

const moneyItems = [
  { number: "50" },
  { number: "100" },
  { number: "150" },
  { number: "200" },
];

function CardForMobileTopUp() {
  const [showSuccessfulMobileTopUpModal, setShowSuccessfulMobileTopUpModal] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const t = cardForMobileTopUpTranslations[selectedLanguage];

  const openShowSuccessfulMobileTopUpModal = () => {
    setShowSuccessfulMobileTopUpModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_cardForMobile}>
        <div className={styles.wrapper_user}>
          <img src="/img/user.png" alt="" />
          <div className={styles.phone_user}>+380965842362</div>
        </div>
        <div className={styles.wrapper_cardInfo}>
          <PhoneNumber />
          <div className={styles.wrapper_sum}>
            <Total_Sum
              title_totalSum={t.totalSumTitle}
              totalSum="0.00"
              fontWeight="bold"
              title_color="greyText"
              total_color="totalPink"
              sizeTotalBlock="size406"
              currency="UAN"
              hideBorder={true}
            />
            <span className={styles.lineHorizontal}></span>
            <div className={styles.wrapper_money}>
              {moneyItems.map(({ number }, index) => (
                <div key={index} className={styles.wrapper_item}>
                  <span className={styles.money}>{number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.wrapper_commissionPayment}>
            <div className={styles.wrapper_commission}>
              <div className={styles.text}>{t.commission}</div>
              <div className={styles.money_style}>0.00 UAN</div>
            </div>
            <div className={styles.wrapper_payment}>
              <div className={styles.text}>{t.paymentDue}</div>
              <div className={styles.money_style}>0.00 UAN</div>
            </div>
          </div>
          <div className={styles.wrapper_card}>
            <div className={styles.wrapper_info}>
              <HeaderForCard
                sizeWrapperTitle="size406"
                title={t.headerCardTitle}
                title_wallet={t.headerCardWallet}
                img="/icons/card_pink24.svg"
              />
              <div className={styles.wrapper_walletCard}>
                <WalletCard showPoints={false} />
              </div>
            </div>
            <ButtonForCard
              onClick={openShowSuccessfulMobileTopUpModal}
              title_button={t.buttonTitle}
              sizeButton="size_button219"
            />
          </div>
        </div>
      </div>
      {showSuccessfulMobileTopUpModal && (
        <SuccessfulMobileTopUp_Modal onClose={() => setShowSuccessfulMobileTopUpModal(false)} />
      )}
    </div>
  );
}

export default CardForMobileTopUp;
