import React, {useState} from "react";
import styles from "./sendReceiveCards.module.css";
import CardOfReceiveSum from "../CardOfReceiveSum/CardOfReceiveSum";
import AddComment from "../AddComment/AddComment";
import Card from "../Card/Card";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import {isValidCardNumber, isValidExpiry} from "../../utils/validateCard";

function SendReceiveCards({setIsConfirmed,senderCardNumber,setSenderCardNumber,receiverCardNumber,
                              setReceiverCardNumber,sum,setSum,comment,setComment}) {
    const [cardPeriod,setCardPeriod] = useState('');
    const [periodValid,setPeriodValid] = useState('');
    const [expiry,setExpiry] = useState('');

    const handleTransferClick = ()=>{
        const rawSender = senderCardNumber.replace(/\s/g, '');
        const rawReceiver = receiverCardNumber.replace(/\s/g, '');
        if(rawSender.length !== 16 || !isValidCardNumber(rawSender)){
            alert("Будь ласка,введіть дійсний номер картки відправника");
            return;
        }
        if(rawReceiver.length !== 16 || !isValidCardNumber(rawReceiver)){
            alert("Будь ласка,введіть дійсний номер картки відправника");
            return;
        }
        if(!isValidExpiry(cardPeriod)){
            alert("Будь ласка, введіть дійсний термін дії картки");
            return;
        }
        setIsConfirmed(true);
    };
    const handleCardPeriodChange = (value)=>{
        setCardPeriod(value);
        setPeriodValid(isValidExpiry(value));
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_info}>
                <div className={styles.cards_comment}>
                    <div className={styles.wrapper_cards}>
                        <Card
                            title="З картки"
                            title_wallet="Мій гаманець"
                            img="/icons/arrow_out_pink.svg"
                            title_card="Номер картки"
                            value={senderCardNumber}
                            setValue={setSenderCardNumber}
                            img_card="/icons/card_white2.svg"
                            title_period="Термін дії"
                            cardPeriod={cardPeriod}
                            handleCardPeriodChange={handleCardPeriodChange}
                            periodValid={periodValid}
                            validityPeriod={expiry}
                            setValidityPeriod={setExpiry}
                            title_kod="CW-kod"
                            cw_kod="***"
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
                <span className={styles.color_grey}>Натискаючи кнопку “Перекази” Ви приймаєте
                <span className={styles.color_white}>умови користування сервісом</span></span>
                    <ButtonForCard
                        title_button="Переказати"
                        onClick={handleTransferClick}
                    />
                </div>
                <img src="/icons/tabler_message.svg"
                     className={styles.img_message} alt=""/>
            </div>
        </div>
    );
}

export default SendReceiveCards;