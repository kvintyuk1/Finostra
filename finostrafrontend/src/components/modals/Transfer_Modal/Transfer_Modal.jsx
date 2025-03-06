import React from 'react';
import styles from './transfer_modal.module.css';
import {useNavigate} from "react-router-dom";

const transferModalItems = [
    {img: "modal_transfer", title: "Перекази на картку", path: "/transactions"},
    {img: "modal_for_details", title: "За реквізитами"},
    {img: "modal_international", title: "Міжнародні"},
    {img: "modal_swift", title: "SWIFT"},
    {img: "modal_payoneer", title: "Payoneer"},
]

const Transfer_Modal = ({onClose, onTransactionClick}) => {
    const navigate = useNavigate();
    const handleItemClick = (path) => {
        if (path === "/transactions") {
            onTransactionClick();
        } else {
            onClose();
        }
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    {
                        transferModalItems.map(({img, title, path}) => (
                            <div key={title}
                                 className={styles.wrapper_item}
                                 onClick={() => handleItemClick(path)}
                            >
                                <div className={styles.item}>
                                    <img src={`./icons/${img}.svg`} alt=""/>
                                    <span className={styles.title}>{title}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Transfer_Modal;