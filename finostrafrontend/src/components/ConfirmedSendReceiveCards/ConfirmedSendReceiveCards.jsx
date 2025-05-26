import React, {useState, useContext} from "react";
import styles from "./confirmedSendReceiveCards.module.css";
import Card from "../Card/Card";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import TransferPersonalMoney_Modal from "../modals/TransferPersonalMoney_Modal/TransferPersonalMoney_Modal";
import SuccessfulTransfer_Modal from "../modals/SuccessfulTransfer_Modal/SuccessfulTransfer_Modal";
import SenderFee from "../for card/SenderFee/SenderFee";
import ReceiverFee from "../for card/ReceiverFee/ReceiverFee";
import {LanguageContext} from "../LanguageContext";
import {confirmedCardsTranslations} from "./confirmedCardsTranslations";

function ConfirmedSendReceiveCards({
                                       setIsConfirmed,
                                       senderCardNumber,
                                       setSenderCardNumber,
                                       receiverCardNumber,
                                       setReceiverCardNumber,
                                       sum,
                                       setSum,
                                       onSubmit
                                   }) {
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
    const [isSuccessfulTransferModalOpen, setIsSuccessfulTransferModalOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("back");

    const {selectedLanguage} = useContext(LanguageContext);
    const t = confirmedCardsTranslations[selectedLanguage];

    // Розрахунок комісій
    const parsedSum = parseFloat(sum);
    const isValidSum = !isNaN(parsedSum) && parsedSum > 0;
    const senderFeeNum = isValidSum ? parsedSum * 0.01 : 0;
    const receiverFeeNum = isValidSum ? parsedSum * 0 : 0;
    const totalWithFee = isValidSum
        ? (parsedSum + senderFeeNum).toFixed(2)
        : "0.00";
    const senderFee = senderFeeNum.toFixed(2);
    const receiverFee = receiverFeeNum.toFixed(2);

    const handleBackClick = () => {
        setActiveButton("back");
        setIsConfirmed(false);
    };
    const handleOpenTransferModal = () => {
        setActiveButton("send");
        setIsTransferModalOpen(true);
    };
    const handleCloseTransferModal = () => {
        setIsTransferModalOpen(false);
    };
    const handleSuccessfulTransfer = () => {
        try {
            onSubmit();

            setIsTransferModalOpen(false);
            setIsSuccessfulTransferModalOpen(true);

        } catch (error) {
            
            setIsTransferModalOpen(false);
            setIsSuccessfulTransferModalOpen(false);
        }

        // Here we're transfering money
        

        
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
                        value={senderCardNumber}
                        setValue={setSenderCardNumber}
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
                                    sum={sum}
                                    totalSum={`${sum} UAH`}
                                    title_color="pinkText"
                                />
                                <SenderFee fee={senderFee}/>
                            </div>
                        }
                    />
                    <Card
                        title={t.receiver}
                        title_wallet={t.receiverWallet}
                        titleColor="whiteText"
                        textTransform="uppercase"
                        title_card={t.receiverCard}
                        value={receiverCardNumber}
                        setValue={setReceiverCardNumber}
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
                                    sum={sum}
                                    totalSum={`${(parsedSum - receiverFeeNum).toFixed(2)} UAH`}
                                    title_color="pinkText"
                                />
                                <ReceiverFee fee={receiverFee}/>
                            </div>
                        }
                    />
                </div>

                <div className={styles.wrapper_total_buttons}>
          <span className={styles.total_amount}>
            {t.totalDebit} {totalWithFee} UAH
          </span>
                    <div className={styles.wrap_buttons}>
                        <ButtonForCard
                            title_button={t.back}
                            colorText="greyText"
                            sizeButton="size_button186"
                            isActive={activeButton === "back"}
                            onClick={handleBackClick}
                        />
                        <ButtonForCard
                            title_button={t.send}
                            sizeButton="size_button186"
                            isActive={activeButton === "send"}
                            onClick={handleOpenTransferModal}
                        />
                    </div>
                </div>
            </div>

            {isTransferModalOpen && (
                <TransferPersonalMoney_Modal
                    onClose={handleCloseTransferModal}
                    onSuccess={handleSuccessfulTransfer}
                    senderCardNumber={senderCardNumber}
                    setSenderCardNumber={setSenderCardNumber}
                    receiveCardNumber={receiverCardNumber}
                    setReceiverCardNumber={setReceiverCardNumber}
                    totalWithFee={totalWithFee}
                    setSum={setSum}
                />
            )}
            {isSuccessfulTransferModalOpen && (
                <SuccessfulTransfer_Modal onClose={handleCloseSuccessfulTransferModal}/>
            )}
        </div>
    );
}

export default ConfirmedSendReceiveCards;
