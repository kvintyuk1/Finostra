import React, { useState, useEffect, useContext } from "react";
import styles from './connection.module.css';
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBankCardsByCurrency } from "../../redux/slices/bankCardSlice";
import { ProfileContext } from "../../components/contexts/ProfileContext";

function Connection() {
  const dispatch = useDispatch();
  const { cards, fetchStatus } = useSelector(state => state.bankCard);
  const [currency, setCurrency] = useState('UAH');
  const { profile, loading, error } = useContext(ProfileContext);

  useEffect(() => {
    dispatch(fetchBankCardsByCurrency(currency));
  }, [currency, dispatch]);

  return (
    <div className={styles.container}>
      
      <Outlet context={{ cards, profile, status: fetchStatus, currency, setCurrency }} />
    </div>
  );
}

export default Connection;
