import React from 'react';
import styles from './transfer_modal.module.css';
import {Link, useNavigate} from "react-router-dom";

const transferModalItems = [
    {img: "modal_transfer", title: "Перекази на картку", path: "/transactions/transactionToCard"},
    {img: "modal_for_details", title: "За реквізитами", path: "/transactions/details"},
    {img: "modal_international", title: "Міжнародні", path: "/transactions/international"},
    {img: "modal_swift", title: "SWIFT", path: "/transactions/swift"},
    {img: "modal_payoneer", title: "Payoneer", path: "/transactions/payoneer"},
]

const Transfer_Modal = ({onClose}) => {
    // Закрытие окна при клике на фон
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    {
                        transferModalItems.map(({img, title, path}) => (
                            <div key={title} className={styles.wrapper_item}>
                                <div className={styles.item}>
                                    <img src={`/icons/${img}.svg`} alt=""/>

                                    <Link to={path} onClick={onClose}>
                                        <span className={styles.title}>{title}</span>
                                    </Link>
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