import React, { useContext } from 'react';
import styles from './addCard.module.css';
import { LanguageContext } from '../LanguageContext';
import { addCardTranslations } from './addCardTranslations';

const AddCard = ({ isDarkMode }) => {
    const { selectedLanguage } = useContext(LanguageContext);
    const tCard = addCardTranslations[selectedLanguage];

    return (
        <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_add_card}>
                    <div className={styles.title}>{tCard.addCard}</div>
                    <button className={styles.title_button}>
                        <div className={styles.content_button}>+</div>
                    </button>
                </div>
                <div className={styles.order}>
                    <div>
                        <span className={styles.order_text}>{tCard.noCard} </span>
                        <a href="#" className={styles.link_order}>{tCard.order}</a>
                        <span className={styles.order_text}> {tCard.getCredit}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCard;
