import React from 'react';
import styles from './addCard.module.css';

const AddCard = ({isDarkMode}) => {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.wrapper_container_info}>
                <div className={styles.wrapper_add_card}>
                    <div className={styles.title}>Додати картку</div>
                    <button className={styles.title_button}>
                        <div className={styles.content_button}>+</div>
                    </button>
                </div>
                <div className={styles.order}>
                    <div>
                        <span className={styles.order_text}>Немає картки? </span>
                        <a href="#" className={styles.link_order}>Замовте</a>
                        <span className={styles.order_text}> і отримайте</span>
                    </div>
                    <span className={styles.order_text}>безвідсотковий кредит до 55 днів.</span>
                </div>
            </div>
        </div>
    )
}
export default AddCard;