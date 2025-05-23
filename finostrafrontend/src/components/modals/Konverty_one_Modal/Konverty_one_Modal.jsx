import React from "react";
import styles from "./konverty_one_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";

function Konverty_one_Modal({onClose,onNextStep}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <img src="/img/star3.png" className={styles.img} alt=""/>
                    <div className={styles.wrap_describer}>
                        <div className={styles.title_description}>
                            <div className={styles.title}>Плануйте свій бюджет</div>
                            <div className={styles.description}>Щоб ефективно розподілити бюджет або накопичити кошти на
                                мрію.
                            </div>
                        </div>
                        <div className={styles.wrap_button}>
                            <img src="/icons/points.svg" alt=""/>
                            <ButtonForCard
                                title_button="Далі"
                                sizeButton="size_button88"
                                onClick={onNextStep}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Konverty_one_Modal;