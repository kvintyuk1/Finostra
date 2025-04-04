import React from "react";
import styles from "./myCredits.module.css";
import TransferToCardInfo from "../../../components/TransferToCardInfo/TransferToCardInfo";
import CurrentContracts from "../../../components/CurrentContracts/CurrentContracts";

function MyCredits({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
             <div className={styles.wrapper_myCredits}>
                 <TransferToCardInfo
                 img="moneybag_white32"
                 title="Мої кредити"
                 subtitle="Керуй своїми кредитами: переглядай умови, залишок та здійснюй платежі зручно."
                 />
                 <CurrentContracts/>
             </div>
            </div>
        </div>
    );
}

export default MyCredits;