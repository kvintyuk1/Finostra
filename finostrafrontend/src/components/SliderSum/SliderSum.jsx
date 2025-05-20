import React from "react";
import styles from "./sliderSum.module.css";

function SliderSum({new_wrapper_slider_sum="width_wrapper_slider_sum666",new_slider_sum="width_slider_sum457",
                   new_background="background_sum_currency_black",
                   new_background_slider_sum="background_slider_sum_grey"}) {
    return (
        <div className={`${styles.wrapper_slider_sum} ${styles[new_wrapper_slider_sum]}`}>
            <div className={`${styles.slider_sum} ${styles[new_slider_sum]} 
                            ${styles[new_background_slider_sum]}`}>
                <input type="range" min="0" max="100" value="0" className={styles.slider}/>
            </div>
            <div className={`${styles.sum_currency} ${styles[new_background]}`}>
                <div className={styles.item}>1000</div>
                <div className={styles.item}>UAH</div>
            </div>
        </div>
    );
}

export default SliderSum;