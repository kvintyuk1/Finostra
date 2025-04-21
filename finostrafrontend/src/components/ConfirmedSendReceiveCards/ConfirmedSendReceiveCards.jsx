import React, { useState, useContext } from "react";
import styles from "./confirmedSendReceiveCards.module.css";
import Card from "../Card/Card";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import TransferPersonalMoney_Modal from "../modals/TransferPersonalMoney_Modal/TransferPersonalMoney_Modal";
import SuccessfulTransfer_Modal from "../modals/SuccessfulTransfer_Modal/SuccessfulTransfer_Modal";
import { LanguageContext } from "../LanguageContext"; 
import { confirmedCardsTranslations } from "./confirmedCardsTranslations"; 

function ConfirmedSendReceiveCards({ setIsConfirmed }) {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isSuccessfulTransferModalOpen, setIsSuccessfulTransferModalOpen] = useState(false);

  
  const { selectedLanguage } = useContext(LanguageContext);
  const t = confirmedCardsTranslations[selectedLanguage];

  const handleBackClick = () => {
    setIsConfirmed(false);
  };
  const handleOpenTransferModal = () => {
    setIsTransferModalOpen(true);
  };
  const handleCloseTransferModal = () => {
    setIsTransferModalOpen(false);
  };
  const handleSuccessfulTransfer = () => {
    setIsTransferModalOpen(false);
    setIsSuccessfulTransferModalOpen(true);
  };
  const handleCloseSuccessfulTransferModal = () => {
    setIsSuccessfulTransferModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_info}>
        <div className={styles.wrapper_cards}>
          <Card
            title={t.sender}
            title_wallet={t.senderWallet}
            img="/icons/arrow_out_pink.svg"
            title_card={t.senderCard}
            value="**** **** **** 1234"
            img_card="/icons/card_white2.svg"
            title_period={t.validity}
            validityPeriod="01 / 25"
            title_kod={t.cwCode}
            cw_kod="123"
            img_kod="/icons/information.svg"
            additionalComponent1={
              <div className={styles.container_totalSum}>
                <Total_Sum
                  title_totalSum={t.senderAmount}
                  totalSum="1000 UAH"
                  title_color="pinkText"
                />
                <Total_Sum
                  title_totalSum={t.senderCommission}
                  totalSum="0 UAH"
                />
              </div>
            }
          />
          <Card
            title={t.receiver}
            title_wallet={t.receiverWallet}
            titleColor="whiteText"
            textTransform="uppercase"
            title_card={t.receiverCard}
            value="4441 1144 1234 5678"
            img_card="/icons/card_white2.svg"
            title_period={t.validity}
            validityPeriod="01 / 25"
            title_kod={t.cwCode}
            cw_kod="123"
            img_kod="/icons/information.svg"
            additionalComponent1={
              <div className={styles.container_totalSum}>
                <Total_Sum
                  title_totalSum={t.receiverToCredit}
                  totalSum="1000 UAH"
                  title_color="pinkText"
                />
                <Total_Sum
                  title_totalSum={t.receiverCommission}
                  totalSum="0 UAH"
                />
              </div>
            }
          />
        </div>
        <div className={styles.wrapper_total_buttons}>
          <span className={styles.total_amount}>{t.totalDebit}{100}</span>
          <div className={styles.wrap_buttons}>
            <ButtonForCard
              title_button={t.back}
              colorText="greyText"
              backgroundButton="blackBackground"
              sizeButton="size_button186"
              onClick={handleBackClick}
            />
            <ButtonForCard
              title_button={t.send}
              sizeButton="size_button186"
              onClick={handleOpenTransferModal}
            />
          </div>
        </div>
      </div>
      {isTransferModalOpen && (
        <TransferPersonalMoney_Modal
          onClose={handleCloseTransferModal}
          onSuccess={handleSuccessfulTransfer} 
        />
      )}
      {isSuccessfulTransferModalOpen && (
        <SuccessfulTransfer_Modal onClose={handleCloseSuccessfulTransferModal} />
      )}
    </div>
  );
}

export default ConfirmedSendReceiveCards;
