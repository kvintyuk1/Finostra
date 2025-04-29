import React from "react";
import styles from "./deposit_Modal.module.css";
import {Link} from "react-router-dom";

const depositItems = [
    {img: "open_deposit", title: "Відкрити вклад", path: "/saving/openDeposit"},
    {img: "myDeposit", title: "Мої вклади", path: "/saving/myDeposit"},
]

function Deposit_Modal({onClose}) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    {
                        depositItems.map(({img, title, path}) => (
                            <div key={title} className={styles.wrapper_item}>
                                <div className={styles.item}>
                                    <img src={`/icons/${img}.svg`} alt=""/>
                                    <Link to={path} onClick={onClose} className={styles.link}>
                                        <span className={styles.title}>{title}</span>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Deposit_Modal;