import React, {useState} from "react";
import styles from "./confirmedSendReceiveCards.module.css";
import Card from "../Card/Card";
import Total_Sum from "../for card/Total_Sum/Total_Sum";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import TransferPersonalMoney_Modal from "../modals/TransferPersonalMoney_Modal/TransferPersonalMoney_Modal";
import SuccessfulTransfer_Modal from "../modals/SuccessfulTransfer_Modal/SuccessfulTransfer_Modal";


function ConfirmedSendReceiveCards({setIsConfirmed}) {
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
    const [isSuccessfulTransferModalOpen, setIsSuccessfulTransferModalOpen] = useState(false);

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
                        title="Відправник"
                        title_wallet="Мій гаманець"
                        img="/icons/arrow_out_pink.svg"
                        title_card="Visa | Картка Універсальна"
                        value="**** **** **** 1234"
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
                                    totalSum="1000 UAH"
                                    title_color="pinkText"
                                />
                                <Total_Sum
                                    title_totalSum="Комісія з відправника"
                                    totalSum="0 UAH"
                                />
                            </div>
                        }
                    />
                    <Card
                        title="Одержувач"
                        title_wallet="Universal bank"
                        titleColor="whiteText"
                        textTransform="uppercase"
                        title_card="Visa"
                        value="4441 1144 1234 5678"
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
                                    totalSum="1000 UAH"
                                    title_color="pinkText"
                                />
                                <Total_Sum
                                    title_totalSum="Комісія з одержувача"
                                    totalSum="0 UAH"
                                />
                            </div>
                        }
                    />
                </div>
                <div className={styles.wrapper_total_buttons}>
                    <span className={styles.total_amount}>Разом до списання: {}</span>
                    <div className={styles.wrap_buttons}>
                        <ButtonForCard
                            title_button="Назад"
                            colorText="greyText"
                            backgroundButton="blackBackground"
                            sizeButton="size_button186"
                            onClick={handleBackClick}
                        />
                        <ButtonForCard
                            title_button="Надіслати"
                            sizeButton="size_button186"
                            onClick={handleOpenTransferModal}
                        />
                    </div>
                </div>
            </div>
            {isTransferModalOpen && (
                <TransferPersonalMoney_Modal
                    onClose={handleCloseTransferModal}
                    onSuccess={handleSuccessfulTransfer} // Передаём колбэк для успешного перевода
                />
            )}
            {isSuccessfulTransferModalOpen && (
                <SuccessfulTransfer_Modal onClose={handleCloseSuccessfulTransferModal}/>
            )}
        </div>
    );
}

export default ConfirmedSendReceiveCards;