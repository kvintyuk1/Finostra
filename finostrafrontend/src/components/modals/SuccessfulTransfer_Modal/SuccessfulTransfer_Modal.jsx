import React from "react";
import styles from "./successfulTransfer_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";

function SuccessfulTransfer_Modal({onClose}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.wrapper_content}>
                    <div className={styles.wrapper_success}>
                        <div className={styles.title_img}>
                            <span className={styles.title}>Переказ</span>
                            <img src="/img/star 3.png" alt=""/>
                        </div>
                        <span className={styles.success}>Платіж успішно відправлено в обробку!</span>
                    </div>
                    <ButtonForCard
                        title_button="Історія транзакцій"
                        sizeButton="size_button226"
                    />
                </div>
            </div>
        </div>
    );
}

export default SuccessfulTransfer_Modal;