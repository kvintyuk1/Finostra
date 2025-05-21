import React, { useContext, useRef, useState } from "react";
import styles from "./sendReceiveCards.module.css";
import CardOfReceiveSum from "../CardOfReceiveSum/CardOfReceiveSum";
import AddComment from "../AddComment/AddComment";
import Card from "../Card/Card";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { isValidCardNumber, isValidExpiry } from "../../utils/validateCard";
import { LanguageContext } from "../LanguageContext";
import { sendReceiveTranslations } from "./sendReceiveTranslations";


function SendReceiveCards({
    setIsConfirmed,
    senderCardNumber,
    setSenderCardNumber,
    receiverCardNumber,
    setReceiverCardNumber,
    sum,
    setSum,
    comment,
    setComment,
    expiry,
    setExpiry,
    cvv,
    setCvv
}) {
    const { language } = useContext(LanguageContext);
    const t = sendReceiveTranslations[language] || sendReceiveTranslations["UA"];
    const [cardPeriod, setCardPeriod] = useState('');
    const [isPeriodValid, setIsPeriodValid] = useState(true);
    const periodInputRef = useRef(null);
    const [cw_kod, setCwKod] = useState('');

    const handleTransferClick = () => {
        const rawSender = senderCardNumber.replace(/\s/g, '');
        const rawReceiver = receiverCardNumber.replace(/\s/g, '');
        // if (rawSender.length !== 16 || !isValidCardNumber(rawSender)) {
        //     alert("Будь ласка,введіть дійсний номер картки відправника");
        //     return;
        // }
        // if (rawReceiver.length !== 16 || !isValidCardNumber(rawReceiver)) {
        //     alert("Будь ласка,введіть дійсний номер картки одержувача");

        //     return;
        // }
        // if (!isValidExpiry(cardPeriod)) {
        //     alert("Будь ласка, введіть дійсний термін дії картки");
        //     return;
        // };
        // if(cw_kod.length !== 3  || /\D/.test(cw_kod)){
        //     alert("Невірний cw код");
        //     return;;
        // }
        setIsConfirmed(true);
    };
    const handleCardPeriodChange = (value) => {
        setCardPeriod(value);
        setExpiry(value);
        setIsPeriodValid(isValidExpiry(value));
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.cards_comment}>
                    <div className={styles.wrapper_cards}>
                        <Card
                            title={t.fromCard}
                            title_wallet={t.myWallet}
                            img="/icons/arrow_out_pink.svg"
                            title_card={t.cardNumber}
                            value={senderCardNumber}
                            setValue={setSenderCardNumber}
                            img_card="/icons/card_white2.svg"
                            title_period={t.expiryDate}
                            title_kod={t.cwCode}
                            cardPeriod={cardPeriod}
                            handleCardPeriodChange={handleCardPeriodChange}
                            isPeriodValid={isPeriodValid}
                            periodInputRef={periodInputRef}
                            cw_kod={cvv}
                            setCwKod={setCvv}
                            expiry={expiry}
                            setExpiry={setExpiry}
                            img_kod="/icons/information.svg"
                        />
                        <CardOfReceiveSum
                            receiverCardNumber={receiverCardNumber}
                            setReceiverCardNumber={setReceiverCardNumber}
                            sum={sum}
                            setSum={setSum}
                        />
                    </div>
                    <AddComment
                        comment={comment}
                        setComment={setComment}
                    />
                </div>
                <div className={styles.wrapper_termsBlock}>
                    <span className={styles.color_grey}>
                        {t.acceptTerms}
                        <span className={styles.color_white}> {t.serviceTerms}</span>
                    </span>
                    <ButtonForCard
                        title_button={t.transferButton}
                        onClick={handleTransferClick}
                    />
                </div>
                <img src="/icons/tabler_message.svg" className={styles.img_message} alt="Message icon" />
            </div>
        </div>
    );
}
export default SendReceiveCards;

