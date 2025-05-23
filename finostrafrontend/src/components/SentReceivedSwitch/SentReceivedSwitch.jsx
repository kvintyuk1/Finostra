import React, {useState} from "react";
import styles from "./sentReceivedSwitch.module.css";

function SentReceivedSwitch({text_but_one,text_but_two,widthContainer="width182",active,onChange}) {

    return (
        <div className={`${styles.wrapper_button} ${styles[widthContainer]}`}>
            <button className={`${styles.send_but} ${active === 'sent' ? styles.active : ''}`}
                    onClick={() => onChange('sent')}
            >
                {text_but_one}
                {active === 'sent' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
            <button
                className={`${styles.receive_but} ${active === 'received' ? styles.active : ''}`}
                onClick={() => onChange('received')}
            >
                {text_but_two}
                {active === 'received' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
        </div>
    );
}

export default SentReceivedSwitch;