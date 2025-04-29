import React, {useState} from "react";
import styles from "./sentReceivedSwitch.module.css";

function SentReceivedSwitch({text_but_one,text_but_two,widthContainer="width182"}) {
    const [activeButton, setActiveButton] = useState('sent');

    return (
        <div className={`${styles.wrapper_button} ${styles[widthContainer]}`}>
            <button className={`${styles.send_but} ${activeButton === 'sent' ? styles.active : ''}`}
                    onClick={() => setActiveButton('sent')}
            >
                {text_but_one}
                {activeButton === 'sent' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
            <button
                className={`${styles.receive_but} ${activeButton === 'received' ? styles.active : ''}`}
                onClick={() => setActiveButton('received')}
            >
                {text_but_two}
                {activeButton === 'received' && <img src="/img/ellipse7.png" alt=""/>}
            </button>
        </div>
    );
}

export default SentReceivedSwitch;