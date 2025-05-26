import React, { useState, useEffect } from "react";
import styles from "./transactions.module.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBankCardsByCurrency } from "../../redux/slices/bankCardSlice";

function Transactions() {

    const dispatch = useDispatch();
    const { cards } = useSelector(state => state.bankCard);
    const [currency, setCurrency] = useState('UAH');

    useEffect(() => {
        dispatch(fetchBankCardsByCurrency(currency));
    }, [currency, dispatch]);

    return (
        <div className={styles.container}>
            <Outlet context={cards}/>
        </div>
    )
}
export default Transactions;