import React, { useState, useContext, useEffect } from "react";
import styles from "./transactionToCard.module.css";
import SWIFT from "../SWIFT/SWIFT";
import InternationalTransfers from "../InternationalTransfers/InternationalTransfers";
import Details from "../Details/Details";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import ConfirmedSendReceiveCards from "../../../components/ConfirmedSendReceiveCards/ConfirmedSendReceiveCards";
import ListTotalAmount from "../../../components/ListTotalAmount/ListTotalAmount";
import SendReceiveCards from "../../../components/SendReceiveCards/SendReceiveCards";
import MoneyTransferService from "../../../components/MoneyTransferService/MoneyTransferService";
import { LanguageContext } from "../../../components/LanguageContext";
import { transactionToCardTranslations } from "./transactionToCardTranslations";
import { useDispatch, useSelector } from 'react-redux';
import { performCardToCardTransaction, fetchTransactions } from "../../../redux/slices/transactionSlice";
import { fetchBankCardsByCurrency } from "../../../redux/slices/bankCardSlice";
import { toast } from "react-toastify";

function TransactionToCard() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    // Стан для карток і суми/коментаря
    const [senderCardNumber, setSenderCardNumber] = useState("");
    const [receiverCardNumber, setReceiverCardNumber] = useState("");
    const [sum, setSum] = useState("");
    const [comment, setComment] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [currency, setCurrency] = useState("");

    // Локалізація
    const { selectedLanguage } = useContext(LanguageContext);
    const t = transactionToCardTranslations[selectedLanguage];

    const dispatch = useDispatch();
    const { transactions, status, error, message } = useSelector(state => state.transaction);

    function convertDate(input) {
        const [month, year] = input.split('/');
        return `20${year}-${month}-01`;
    }

    const handleTransfer = async () => {
        try {
            const transactionBody = {
                senderCardNumber: senderCardNumber.replaceAll(' ', ''),
                expiryDate: convertDate(expiry),
                receiverCardNumber: receiverCardNumber.replaceAll(' ', ''),
                amount: sum,
                currency: "UAH",
                description: comment,
                cvv: cvv
            }

            await dispatch(performCardToCardTransaction(transactionBody)).unwrap();

            dispatch(fetchTransactions());
        } catch (error) {
            toast.error("Не вдалося виконати переказ")
        }
    };

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <TransferToCardInfo
                img="card_white"
                title={t.title}
                subtitle={t.subtitle}
            />

            {isConfirmed ? (
                <>
                    <ConfirmedSendReceiveCards
                        setIsConfirmed={setIsConfirmed}
                        senderCardNumber={senderCardNumber}
                        setSenderCardNumber={setSenderCardNumber}
                        receiverCardNumber={receiverCardNumber}
                        setReceiverCardNumber={setReceiverCardNumber}
                        sum={sum}
                        setSum={setSum}
                        onSubmit={handleTransfer}
                    />

                </>
            ) : (
                <>
                    <SendReceiveCards
                        setIsConfirmed={setIsConfirmed}
                        senderCardNumber={senderCardNumber}
                        setSenderCardNumber={setSenderCardNumber}
                        receiverCardNumber={receiverCardNumber}
                        setReceiverCardNumber={setReceiverCardNumber}
                        sum={sum}
                        setSum={setSum}
                        comment={comment}
                        setComment={setComment}
                        cvv={cvv}
                        setCvv={setCvv}
                        expiry={expiry}
                        setExpiry={setExpiry}
                    />

                </>
            )}

            {status === 'loading' ? (<div>Loading...</div>) : (<ListTotalAmount transactions={transactions} />)}
            
            {/* <MoneyTransferService /> */}
        </div>
    );
}

export default TransactionToCard;
