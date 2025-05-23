import React, {useState} from "react";
import styles from "./myKonverty.module.css";
import MyConversions from "../../../components/MyConversions/MyConversions";
import CollectingMoney from "../../../components/CollectingMoney/CollectingMoney";
import CurrencyConverter from "../../../components/CurrencyConverter/CurrencyConverter";

function MyKonverty() {
    const [showKomvert, setShowKonvert] = useState(true);
    return (
        <div className={styles.container}>
            {showKomvert ? (
                <MyConversions
                    showKomvert={showKomvert}
                    setShowKonvert={setShowKonvert}
                />
            ) : (
                <div className={styles.wrapper_component}>
                    <CollectingMoney
                        setShowKonvert={setShowKonvert}
                    />
                    <CurrencyConverter/>
                </div>
            )}
        </div>
    );
}

export default MyKonverty;