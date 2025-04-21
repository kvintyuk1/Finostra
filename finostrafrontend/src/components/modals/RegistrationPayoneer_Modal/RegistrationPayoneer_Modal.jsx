import React, { useContext } from "react";
import styles from "./registrationPayoneer_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";
import WalletCard from "../../WalletCard/WalletCard";
import { LanguageContext } from "../../LanguageContext";
import { registrationPayoneerTranslations } from "./registrationPayoneerTranslations";

function RegistrationPayoneer_Modal({ onClose }) {
    const { selectedLanguage } = useContext(LanguageContext);
    const tModal = registrationPayoneerTranslations[selectedLanguage];

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <div className={styles.title}>{tModal.title}</div>
                    <div className={styles.wrapper_info}>
                        <div className={styles.wrapper_content}>
                            <div className={styles.wrapper_card}>
                                <div className={styles.title_card}>{tModal.selectCard}</div>
                                <div className={styles.wrap_card}>
                                    <div className={styles.card}>
                                        <WalletCard showPoints={false} />
                                        <img src="/icons/arrow_down16.svg" className={styles.img_arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.wrapper_agreement}>
                                <img src="/img/check-box-rounded.png" alt=""/>
                                <div className={styles.text}>{tModal.agreement}</div>
                            </div>
                        </div>
                        <ButtonForCard
                            title_button={tModal.select}
                            sizeButton="size_button173"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPayoneer_Modal;
