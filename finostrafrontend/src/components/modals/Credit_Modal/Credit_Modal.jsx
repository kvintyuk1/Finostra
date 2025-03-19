import React from "react";
import styles from "./credit_Modal.module.css";
import {Link} from "react-router-dom";

const creditModalItems = [
    {img: "moneybag_solar", title: "Мої кредити", path: "/credit/moneybagSolar"},
    {img: "credit_limit", title: "Кредитний ліміт", path: "/credit/creditLimit"},
    {img: "payment_installments", title: "Оплата частинами", path: "/credit/paymentInstallments"},
    {img: "installment", title: "Миттєва розстрочка", path: "/credit/instantInstallment"},
    {img: "credit_cash", title: "Кредит готівкою", path: "/credit/creditCash"},
    {img: "credit_car", title: "Авто в кредит", path: "/credit/creditCar"},
    {img: "credit_house", title: "Кредит на житло", path: "/credit/creditHouse"},
    {img: "mynaui_search_home", title: "Моніторинг заставного майна", path: "/credit/monitoringCollateralProperty"},
    {img: "hand_deposit", title: "Згода на надання депозиту в заставу", path: "/credit/depositSecurity"},
    {img: "sad", title: "Робота з простроченою заборгованістю", path: "/credit/overdueDebts"},
]

function Credit_Modal({onClose}) {
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
                        creditModalItems.map(({img, title, path}) => (
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

export default Credit_Modal;