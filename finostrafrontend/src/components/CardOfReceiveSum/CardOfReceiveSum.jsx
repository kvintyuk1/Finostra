import React, {useState} from "react";
import styles from "./cardOfReceiveSum.module.css";
import CardOfReceive from "../CardOfReceive/CardOfReceive";
import SumForReceive from "../SumForReceive/SumForReceive";
import {isValidCardNumber} from "../../utils/validateCard";

function CardOfReceiveSum({receiverCardNumber,setReceiverCardNumber,sum,setSum}) {
    const [receiverCardValid, setReceiverCardValid] = useState(true);

    const handleChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, "").slice(0, 16);
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
        setReceiverCardNumber(formattedValue);
        setReceiverCardValid(isValidCardNumber(rawValue));
    };

    return (
        <div className={styles.container}>
           <CardOfReceive
               receiverCardNumber={receiverCardNumber}
               setReceiverCardNumber={setReceiverCardNumber}
               value={receiverCardNumber}
               onChange={handleChange}
               cardValid={receiverCardValid}
           />
           <SumForReceive
           sum={sum}
           setSum={setSum}
           selectedLanguage={"UA"}
           handleLanguageChange={(e)=>console.log("change", e.target.value)}
           />
        </div>
    );
}

export default CardOfReceiveSum;