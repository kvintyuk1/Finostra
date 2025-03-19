import React, {useState} from "react";
import styles from "./payoneer_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";
import RegistrationPayoneer_Modal from "../RegistrationPayoneer_Modal/RegistrationPayoneer_Modal";

function Payoneer_Modal({onClose}) {
    const [showRegistrationPayoneerModal, setShowRegistrationPayoneerModal] = useState(false);

    const openShowRegistrationPayoneerModal = () => {
        setShowRegistrationPayoneerModal(true);
    }

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
                            onClick={openShowRegistrationPayoneerModal}
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
            {showRegistrationPayoneerModal &&
                <RegistrationPayoneer_Modal onClose={()=>setShowRegistrationPayoneerModal(false)}/>}
        </div>
    );
}

export default Payoneer_Modal;