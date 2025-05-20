import React from "react";
import styles from "./depositAmount.module.css";
import SliderSum from "../SliderSum/SliderSum";

function DepositAmount({new_container="width_container734",new_background_container="background_container_grey",
                       new_title="width_title666",new_slider_sum,new_wrapper_slider_sum,
                           new_background,new_background_slider_sum}) {
    return (
        <div className={`${styles.container} ${styles[new_container]} ${styles[new_background_container]}`}>
            <div className={`${styles.title} ${styles[new_title]}`}>Сума</div>
            <SliderSum
            new_slider_sum={new_slider_sum}
            new_wrapper_slider_sum={new_wrapper_slider_sum}
            new_background={new_background}
            new_background_slider_sum={new_background_slider_sum}
            />
        </div>
    );
}

export default DepositAmount;