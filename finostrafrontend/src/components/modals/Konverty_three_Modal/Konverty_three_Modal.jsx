import React from "react";
import styles from "./konverty_three_Modal.module.css";
import ButtonForCard from "../../for card/ButtonForCard/ButtonForCard";

function Konverty_three_Modal({onClose,navigateToConversions}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modal_content}>
                    <img src="/img/star 3.png" className={styles.img} alt=""/>
                    <div className={styles.wrap_describer}>
                        <div className={styles.title_description}>
                            <div className={styles.title}>Разом веселіше</div>
                            <div className={styles.description}>Запрошуйте друзів та близьких, щоб разом накопичувати на спільну
                                мету.
                            </div>
                        </div>
                        <div className={styles.wrap_button}>
                            <img src="/icons/points3.svg" alt=""/>
                            <ButtonForCard
                                title_button="Створити конверт"
                                sizeButton="size_button173"
                                onClick={navigateToConversions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Konverty_three_Modal;