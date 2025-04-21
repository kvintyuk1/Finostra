import React, { useContext } from "react";
import styles from "./successfulTransfer_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";
import { LanguageContext } from "../../LanguageContext";
import { successfulTransferModalTranslations } from "./successfulTransferModalTranslations";

function SuccessfulTransfer_Modal({ onClose }) {
    const { selectedLanguage } = useContext(LanguageContext);
const t = successfulTransferModalTranslations[selectedLanguage] || successfulTransferModalTranslations["UA"];


    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.wrapper_content}>
                    <div className={styles.wrapper_success}>
                        <div className={styles.title_img}>
                            <span className={styles.title}>{t.title}</span>
                            <img src="/img/star 3.png" alt=""/>
                        </div>
                        <span className={styles.success}>{t.successMessage}</span>
                    </div>
                    <ButtonForCard
                        title_button={t.historyButton}
                        sizeButton="size_button226"
                    />
                </div>
            </div>
        </div>
    );
}

export default SuccessfulTransfer_Modal;
