import React from "react";
import styles from "./depositTopPanel.module.css";

function DepositTopPanel() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.title}>Назва</div>
                <div className={styles.wrap_menu}>
                    <div className={styles.wrap_rate}>
                        <span className={styles.rate}>Ставка річних</span>
                    </div>
                    <div className={styles.wrap_items_menu}>
                        <div className={styles.account_payment}>
                            <div className={styles.item}>Поповнення</div>
                            <div className={styles.item}>Виплата процентів</div>
                        </div>
                        <div className={styles.wrap_term}>
                           <div className={styles.item}>Термін (місяць)</div>
                           <div className={styles.item}>Без дострокового закриття</div>
                           <div className={styles.item}>З достроковим закриттям</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepositTopPanel;