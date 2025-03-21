import React from "react";
import styles from "./successfulMobileTopUp_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";

function SuccessfulMobileTopUp_Modal({onClose}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <div className={styles.wrap_info}>
                        <div className={styles.wrapper_title_img}>
                            <div className={styles.title}>Дякуємо, що ви з нами!</div>
                            <img src="/img/star 3.png" alt=""/>
                        </div>
                        <div className={styles.wrapper_text}>
                            <span className={styles.text}>Ваш рахунок поповнено</span>
                            <span className={styles.text}> успішно!</span>
                        </div>
                    </div>
                    <ButtonForCard
                        title_button="Завершити"
                        sizeButton="size_button168"
                    />
                </div>
            </div>

        </div>
    );
}

export default SuccessfulMobileTopUp_Modal;