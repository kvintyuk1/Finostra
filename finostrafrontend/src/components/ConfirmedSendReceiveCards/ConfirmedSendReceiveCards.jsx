import React, {useState} from "react";
import styles from "./confirmedSendReceiveCards.module.css";
import Card from "../Card/Card";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import TransferPersonalMoney_Modal from "../modals/TransferPersonalMoney_Modal/TransferPersonalMoney_Modal";
import SuccessfulTransfer_Modal from "../modals/SuccessfulTransfer_Modal/SuccessfulTransfer_Modal";
import SenderFee from "../for card/SenderFee/SenderFee";
import ReceiverFee from "../for card/ReceiverFee/ReceiverFee";


function ConfirmedSendReceiveCards({setIsConfirmed,senderCardNumber,setSenderCardNumber,receiverCardNumber,
    setReceiverCardNumber,sum,setSum}) {
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
    const [isSuccessfulTransferModalOpen, setIsSuccessfulTransferModalOpen] = useState(false);
    const [activeButton,setActiveButton]= useState("back");

    const parsedSum = parseFloat(sum);
    const isValidSum = !isNaN(parsedSum) && parsedSum > 0;
    const senderFeeNum = isValidSum ? parsedSum * 0.01 : 0;
    const senderFee = senderFeeNum.toFixed(2); //1%
    const receiverFeeNum = isValidSum ? parsedSum * 0 : 0;
    const receiverFee = receiverFeeNum.toFixed(2);  // 0%
    const totalWithFee = isValidSum ? (parsedSum + senderFeeNum).toFixed(2) : "0.00" //1%

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
                        title="Відправник"
                        title_wallet="Мій гаманець"
                        img="/icons/arrow_out_pink.svg"
                        title_card="Visa | Картка Універсальна"
                        value={senderCardNumber}
                        setValue={setSenderCardNumber}
                        img_card="/icons/card_white2.svg"
                        title_period="Термін дії"
                        validityPeriod="01 / 25"
                        title_kod="CW-kod"
                        cw_kod="123"
                        img_kod="/icons/information.svg"
                        additionalComponent1={
                            <div className={styles.container_totalSum}>
                                <Total_Sum
                                    title_totalSum="Сума"
                                    sum={sum}
                                    title_color="pinkText"
                                />
                                <SenderFee fee={senderFee}/>
                            </div>
                        }
                    />
                    <Card
                        title="Одержувач"
                        title_wallet="Universal bank"
                        titleColor="whiteText"
                        textTransform="uppercase"
                        title_card="Visa"
                        value={receiverCardNumber}
                        setValue={setReceiverCardNumber}
                        img_card="/icons/card_white2.svg"
                        title_period="Термін дії"
                        validityPeriod="01 / 25"
                        title_kod="CW-kod"
                        cw_kod="123"
                        img_kod="/icons/information.svg"
                        additionalComponent1={
                            <div className={styles.container_totalSum}>
                                <Total_Sum
                                    title_totalSum="До зарахування"
                                    sum={sum}
                                    title_color="pinkText"
                                />
                                <ReceiverFee fee={receiverFee}/>
                            </div>
                        }
                    />
                </div>
                <div className={styles.wrapper_total_buttons}>
                    <span className={styles.total_amount}>Разом до списання: {totalWithFee}</span>
                    <div className={styles.wrap_buttons}>
                        <ButtonForCard
                            title_button="Назад"
                            colorText="greyText"
                            sizeButton="size_button186"
                            isActive={activeButton === "back"}
                            onClick={handleBackClick}
                        />
                        <ButtonForCard
                            title_button="Надіслати"
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
                    onSuccess={handleSuccessfulTransfer} // Передаём колбэк для успешного перевода
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