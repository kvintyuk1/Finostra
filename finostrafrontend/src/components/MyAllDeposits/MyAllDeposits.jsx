import React from "react";
import styles from "./myAllDeposits.module.css";
import ButtonForCard from "../for card/ButtonForCard/ButtonForCard";
import {useNavigate} from "react-router-dom";

function MyAllDeposits() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/saving/openDeposit')
    }
    return (
        <div className={styles.container}>
             <div className={styles.title}>Мої вклади</div>
             <div className={styles.deposits_displayed}>Тут будуть відображатися ваші вклади.</div>
             <div className={styles.wrap_button}>
                 <ButtonForCard
                 title_button="Відкрити вклад"
                 sizeButton="size_button179"
                 onClick={handleClick}
                 />
             </div>
        </div>
    );
}

export default MyAllDeposits;