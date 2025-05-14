import React, {useState} from "react";
import styles from "./currencySwitch.module.css";

function CurrencySwitch({text_but_one,text_but_two,text_but_three,widthContainer="width247"}) {
    const [activeCurrencyButton, setActiveCurrencyButton] = useState('hryvnia');
    return (
        <div className={`${styles.container} ${styles[widthContainer]}`}>
            <button className={`${styles.hryvnia_but} ${activeCurrencyButton === 'hryvnia' ? styles.active : ''}`}
                    onClick={() => setActiveCurrencyButton('hryvnia')}
            >
                {text_but_one}
                {activeCurrencyButton === 'hryvnia' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
            <button
                className={`${styles.dollar_but} ${activeCurrencyButton === 'dollar' ? styles.active : ''}`}
                onClick={() => setActiveCurrencyButton('dollar')}
            >
                {text_but_two}
                {activeCurrencyButton === 'dollar' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
            <button
                className={`${styles.euro_but} ${activeCurrencyButton === 'euro' ? styles.active : ''}`}
                onClick={() => setActiveCurrencyButton('euro')}
            >
                {text_but_three}
                {activeCurrencyButton === 'euro' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
        </div>
    );
}

export default CurrencySwitch;