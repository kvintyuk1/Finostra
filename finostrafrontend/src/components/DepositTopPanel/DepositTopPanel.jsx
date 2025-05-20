import React from "react";
import styles from "./depositTopPanel.module.css";

function DepositTopPanel() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap_content}>
                <div className={styles.title}>Назва</div>
                <div className={styles.wrap_menu}>
                        <div className={styles.account_payment}>
                            <div className={styles.item}>Поповнення</div>
                            <div className={styles.item}>Виплата процентів</div>
                            <div className={styles.item}>Термін (місяць)</div>
                        </div>
                    <div className={styles.wrap_term}>
                        <span className={styles.rate}>Ставка річних</span>
                        <div className={styles.wrap_item}>
                            <div className={styles.wrap_text}>
                                <div className={styles.item}>Без</div>
                                <div className={styles.item}>дострокового закриття</div>
                            </div>
                            <div className={styles.wrap_text}>
                                <div className={styles.item}>З</div>
                                <div className={styles.item}>достроковим закриттям</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepositTopPanel;