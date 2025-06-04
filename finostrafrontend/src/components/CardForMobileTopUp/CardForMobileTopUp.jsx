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
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { topUpPhone } from "../../redux/slices/phoneTopUpSlice";

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

  const { profile } = useOutletContext();

  const dispatch = useDispatch();
  const { phoneTransactions, status, error, message } = useSelector((state) => state.phoneTransaction);

  const [sum, setSum] = useState("");

  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [balance, setBalance] = useState("");

  const openShowSuccessfulMobileTopUpModal = () => {
    handleTopUp();
    setShowSuccessfulMobileTopUpModal(true);
  };

  const handleTopUp = async () => {
    try {
      if (!cardNumber || !expiryDate || !cvv || !balance || !phone)
        return;

      const [month, year] = expiryDate.split('/');
      const formattedExpiry = `20${year}-${month}-01`;

      await dispatch(topUpPhone({
        phoneNumber: phone,
        senderCardNumber: cardNumber,
        expiryDate: formattedExpiry,
        amount: sum,
        currency: 'UAH',
        description: 'Top Up Phone ' + phone,
        cvv: cvv
      })).unwrap();


    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_cardForMobile}>
        <div className={styles.wrapper_user}>
          <img src={profile.avatarBlobLink || ""} alt="" />
          <div className={styles.phone_user}>{profile.phoneNumber}</div>
        </div>
        <div className={styles.wrapper_cardInfo}>
          <PhoneNumber onChange={(e) => { setPhone('+380' + e.target.value); }} />
          <div className={styles.wrapper_sum}>
            <Total_Sum
              title_totalSum={t.totalSumTitle}
              totalSum="0.00"
              fontWeight="bold"
              title_color="greyText"
              total_color="totalPink"
              sizeTotalBlock="size406"
              currency="UAH"
              hideBorder={true}
              onChange={(e) => { setSum(e.target.value); }}
              sum={sum}
            />
            <span className={styles.lineHorizontal}></span>
            <div className={styles.wrapper_money}>
              {moneyItems.map(({ number }, index) => (
                <div key={index} className={styles.wrapper_item} onClick={() => {
                  setSum(number);
                }}>
                  <span className={styles.money}>{number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.wrapper_commissionPayment}>
            <div className={styles.wrapper_commission}>
              <div className={styles.text}>{t.commission}</div>
              <div className={styles.money_style}>0.00 UAH</div>
            </div>
            <div className={styles.wrapper_payment}>
              <div className={styles.text}>{t.paymentDue}</div>
              <div className={styles.money_style}>0.00 UAH</div>
            </div>
          </div>
          <div className={styles.wrapper_card}>
            <div className={styles.wrapper_info}>
              <HeaderForCard
                sizeWrapperTitle="size406"
                title={t.headerCardTitle}
                title_wallet={t.headerCardWallet}
                img="/icons/card_pink24.svg"
                setSenderCardNumber={setCardNumber}
                setExpiry={setExpiryDate}
                setCvv={setCvv}
                setBalanceAmount={setBalance}
              />
              <div className={styles.wrapper_walletCard}>
                <WalletCard
                  cardNumber={cardNumber}
                  expiryDate={expiryDate}
                  cvv={cvv}
                  balance={balance}
                  showPoints={false}
                />
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
