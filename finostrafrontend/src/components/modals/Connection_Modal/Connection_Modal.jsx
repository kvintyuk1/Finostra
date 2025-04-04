import React from "react";
import styles from "./connection_Modal.module.css";
import {Link} from "react-router-dom";

const connectionModalItems = [
    {img: "mobile", title: "Поповнення мобільного", path: "/connection/mobileRecharge"},
    {img: "ukrtelekom", title: "Укртелеком", path: "/connection/ukrtelekom"},
    {img: "triolan", title: "Тріолан", path: "/connection/triolan"},
    {img: "kyivstar", title: "Київстар", path: "/connection/kyivstar"},
    {img: "volia", title: "Воля", path: "/connection/volia"},
    {img: "viasat", title: "Viasat", path: "/connection/viasat"},
    {img: "datagroup 1", title: "Датагруп", path: "/connection/datagroup"},
    {img: "homenet", title: "HomeNet", path: "/connection/homenet"},
    {img: "vodafone", title: "Vodafone", path: "/connection/vodafone"},
]

function Connection_Modal({onClose}) {
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
                        connectionModalItems.map(({img, title, path}) => (
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

export default Connection_Modal;