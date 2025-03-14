import React from "react";
import styles from "./payoneer_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";

function Payoneer_Modal({onClose}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <div className={styles.wrapper_content}>
                        <img src="/img/payoneer63.png" alt=""/>
                        <span className={styles.title}>У вас є аккаунт Payoneer?</span>
                    </div>
                    <div className={styles.wrapper_button}>
                        <ButtonForCard
                            title_button="Ні"
                            colorText="greyText"
                            sizeButton="size_button118"
                            backgroundButton="blackBackground"
                        />
                        <ButtonForCard
                            title_button="Так"
                            sizeButton="size_button128"
                            onClick={onClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payoneer_Modal;