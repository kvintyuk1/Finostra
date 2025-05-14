import React from "react";
import styles from "./depositInCurrency.module.css";
import CurrencySwitch from "../CurrencySwitch/CurrencySwitch";
import DepositTopPanel from "../DepositTopPanel/DepositTopPanel";

function DepositInCurrency() {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper_content}>
              <CurrencySwitch
                  text_but_one="Гривня"
                  text_but_two="Доллар США"
                  text_but_three="Євро"
              />
              <DepositTopPanel/>
          </div>
        </div>
    );
}

export default DepositInCurrency;