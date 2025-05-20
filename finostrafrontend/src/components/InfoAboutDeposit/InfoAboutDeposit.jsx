import React from "react";
import styles from "./infoAboutDeposit.module.css";
import DepositRate from "../DepositRate/DepositRate";
import DepositAmount from "../DepositAmount/DepositAmount";
import DepositReplenishment from "../DepositReplenishment/DepositReplenishment";
import NumberOfContinuations from "../NumberOfContinuations/NumberOfContinuations";
import ManagementPercentage from "../ManagementPercentage/ManagementPercentage";
import InfoPercentCalculation from "../InfoPercentCalculation/InfoPercentCalculation";
import YouWillReceive from "../YouWillReceive/YouWillReceive";
import Calculation from "../Calculation/Calculation";
import AfterPayingTaxes from "../AfterPayingTaxes/AfterPayingTaxes";

function InfoAboutDeposit({new_slider_sum,new_wrapper_slider_sum,new_background,new_background_slider_sum}) {
    return (
        <div className={styles.container}>
             <div className={styles.choice_deposit_options}>
              <DepositRate/>
              <DepositAmount
                  new_slider_sum={new_slider_sum}
                  new_wrapper_slider_sum={new_wrapper_slider_sum}
                  new_background={new_background}
                  new_background_slider_sum={new_background_slider_sum}
              />
              <DepositReplenishment/>
              <NumberOfContinuations/>
              <ManagementPercentage/>
              <InfoPercentCalculation/>
             </div>


            <div className={styles.calculation_options}>
              <YouWillReceive/>
                <div className={styles.calculation_afterTaxes}>
                  <Calculation/>
                  <AfterPayingTaxes/>
                </div>
            </div>
        </div>
    );
}

export default InfoAboutDeposit;