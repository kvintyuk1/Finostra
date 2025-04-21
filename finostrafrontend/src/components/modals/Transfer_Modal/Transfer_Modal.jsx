import React, { useState, useContext } from 'react';
import styles from './transfer_modal.module.css';
import { Link } from "react-router-dom";
import Payoneer_Modal from "../Payoneer_Modal/Payoneer_Modal";
import { LanguageContext } from "../../LanguageContext";
import { transferModalTranslations } from "./transferModalTranslations";

const transferModalItems = [
    { img: "modal_transfer", titleKey: "transferToCard", path: "/transactions/transactionToCard" },
    { img: "modal_for_details", titleKey: "details", path: "/transactions/details" },
    { img: "modal_international", titleKey: "international", path: "/transactions/international" },
    { img: "modal_swift", titleKey: "swift", path: "/transactions/swift" },
    { img: "modal_payoneer", titleKey: "payoneer", path: "/transactions/payoneer", modal: "payoneerModal" },
];

const Transfer_Modal = ({ onClose }) => {
    const [showPayoneerModal, setShowPayoneerModal] = useState(false);
    const { selectedLanguage } = useContext(LanguageContext);
    const tModal = transferModalTranslations[selectedLanguage];

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const openPayoneerModal = () => {
        setShowPayoneerModal(true);
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_content}>
                    {transferModalItems.map(({ img, titleKey, path, modal }) => (
                        <div key={titleKey} className={styles.wrapper_item}>
                            <div className={styles.item}>
                                <img src={`/icons/${img}.svg`} alt=""/>
                                {modal === "payoneerModal" ? (
                                    <span onClick={openPayoneerModal}>
                                        {tModal[titleKey]}
                                    </span>
                                ) : (
                                    <Link to={path} onClick={onClose}>
                                        <span className={styles.title}>
                                            {tModal[titleKey]}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showPayoneerModal && <Payoneer_Modal onClose={() => setShowPayoneerModal(false)} />}
        </div>
    );
};

export default Transfer_Modal;
