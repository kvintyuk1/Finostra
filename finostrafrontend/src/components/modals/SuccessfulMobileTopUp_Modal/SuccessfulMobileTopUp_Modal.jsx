import React, { useContext } from "react";
import styles from "./successfulMobileTopUp_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../../LanguageContext";
import { successfulMobileTopUpTranslations } from "./successfulMobileTopUpTranslations";

function SuccessfulMobileTopUp_Modal({ onClose }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const tModal = successfulMobileTopUpTranslations[selectedLanguage];

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <div className={styles.wrap_info}>
                        <div className={styles.wrapper_title_img}>
                            <div className={styles.title}>{tModal.thankYou}</div>
                            <img src="/img/star 3.png" alt=""/>
                        </div>
                        <div className={styles.wrapper_text}>
                            <span className={styles.text}>{tModal.accountRecharged}</span>
                            <span className={styles.text}> {tModal.successfully}</span>
                        </div>
                    </div>
                    <ButtonForCard
                        title_button={tModal.finish}
                        sizeButton="size_button168"
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    );
}

export default SuccessfulMobileTopUp_Modal;
