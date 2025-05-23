import React from "react";
import styles from "./myDeposit.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import MyAllDeposits from "../../../components/MyAllDeposits/MyAllDeposits";

function MyDeposit() {
    return (
        <div className={styles.container}>
             <div className={styles.wrapper_content}>
                 <TransferToCardInfo
                     img="percent37"
                     title="Депозити"
                     subtitle="Керуйте своїми депозитами онлайн"
                 />
                 <Breadcrumbs/>
                 <MyAllDeposits/>
             </div>
        </div>
    );
}

export default MyDeposit;