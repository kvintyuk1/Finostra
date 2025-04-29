import React from "react";
import styles from "./cards_Modal.module.css";
import {Link} from "react-router-dom";

const cardsModalItems = [
    {img: "finostra_card", title: "Digital картка", path: "/cards/digitalCard"},
    {img: "onlineCard", title: "Інтернет картка", path: "/cards/onlineCard"},
    {img: "anotherBankCard", title: "Картка іншого банку", path: "/cards/anotherBankCard"},
    {img: "plasticCard", title: "Пластикова картка", path: "/cards/plasticСard"},
    {img: "convert", title: "Конверт", path: "/cards/convert"},
]

function Cards_Modal({onClose}) {
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
                        cardsModalItems.map(({img, title, path}) => (
                            <div key={title} className={styles.wrapper_item}>
                                <div className={styles.item}>
                                    <img src={`/img/${img}.png`} alt=""/>
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

export default Cards_Modal;