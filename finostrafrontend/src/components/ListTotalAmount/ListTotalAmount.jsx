import React, { useContext, useState, useMemo } from "react";
import styles from "./listTotalAmount.module.css";
import Period from "../Period/Period";
import Search from "../Search/Search";
import ListTable from "../ListTable/ListTable";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../LanguageContext";
import { listTotalAmountTranslations } from "./listTotalAmountTranslations";

function ListTotalAmount({ transactions }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const t = listTotalAmountTranslations[selectedLanguage];

    const [period, setPeriod] = useState("");
    const [search, setSearch] = useState("");

    const filteredTransactions = useMemo(() => {
            return transactions.filter((tx) => {
                const matchesSearch = search
                    ? tx.receiver?.includes(search) || tx.amount?.toString().toLowerCase().includes(search.toLowerCase())
                    : true;
    
                const date = new Date(tx.date);
    
                const formattedDate 
                = `${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear().toString()}`;
    
                const matchesPeriod = period
                    ? formattedDate?.startsWith(period)
                    : true;
    
                return matchesSearch && matchesPeriod;
            });
        }, [transactions, search, period]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper_listContainer}>
                <div className={styles.wrapper_list}>
                    <div className={styles.container_period_search}>
                        <Period  onChange={setPeriod}/>
                        <Search onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <ListTable transactions={filteredTransactions} />
                </div>
                <ButtonForCard
                    title_button={t.loadMore}
                    sizeButton="size_button207"
                    colorText="greyText"
                    backgroundButton="blackBackground"
                    fontWeight="fontWeight400"
                    img="/icons/arrow_down_but.svg"
                />
            </div>
        </div>
    );
}

export default ListTotalAmount;
