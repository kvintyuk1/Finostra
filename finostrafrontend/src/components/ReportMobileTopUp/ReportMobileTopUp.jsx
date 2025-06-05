import React, { useEffect, useState, useMemo } from "react";
import styles from "./reportMobileTopUp.module.css";
import Period from "../Period/Period";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import ListMobileTable from "../ListMobileTable/ListMobileTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhoneTransaction } from "../../redux/slices/phoneTopUpSlice";
import { SpinnerCircular } from "spinners-react";

function ReportMobileTopUp() {
    const dispatch = useDispatch();
    const { phoneTransactions, status, error, message } = useSelector((state) => state.phoneTransaction);

    const [period, setPeriod] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getAllPhoneTransaction());
    }, [dispatch]);

    const filteredTransactions = useMemo(() => {
        return phoneTransactions.filter((tx) => {
            const matchesSearch = search
                ? tx.receiver?.includes(search) || tx.amount?.toString().toLowerCase().includes(search.toLowerCase())
                : true;

            const date = new Date(tx.date);

            const formattedDate 
            = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear().toString()}`;

            const matchesPeriod = period
                ? formattedDate?.startsWith(period)
                : true;

            return matchesSearch && matchesPeriod;
        });
    }, [phoneTransactions, search, period]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_section}>
                <div className={styles.wrapper_period_search}>
                    <Period
                        sizePeriod="size304"
                        iconSrc="/icons/calendar2.svg"
                        iconPosition="right"
                        onChange={setPeriod}
                    />
                    <Search
                        sizeInput="width202"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {/* <Filter /> */}
            </div>
            <div>
                {
                    status === 'loading' ? (
                        <div className={styles.spinnerBox}>
                            <SpinnerCircular size={100} thickness={140} />
                            <span>Завантаження транзакцій…</span>
                        </div>
                    ) : (
                        <ListMobileTable mobileTransactions={filteredTransactions} />
                    )
                }
            </div>
        </div>
    );
}

export default ReportMobileTopUp;
