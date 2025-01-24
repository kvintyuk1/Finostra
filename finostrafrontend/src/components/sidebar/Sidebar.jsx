import React from "react";
import styles from './sidebar.module.css';
import {Link} from "react-router-dom";

function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    <li><Link to="home" className={styles.iconContainer}>
                        <img src="./icons/home.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <span>Головна</span>
                        </div>
                    </Link></li>
                    <li><Link to="translations" className={styles.iconContainer}>
                        <img src="./icons/transfer.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Перекази</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="connection" className={styles.iconContainer}>
                        <img src="./icons/connect.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Зв'язок</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="saving" className={styles.iconContainer}>
                        <img src="./icons/saving.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Заощядження</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="conversions" className={styles.iconContainer}>
                        <img src="./icons/conversions.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Конверти</div>
                        </div>
                    </Link></li>
                    <li><Link to="piggy_bank" className={styles.iconContainer}>
                        <img src="./icons/piggy_bank.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Скарбничка</div>
                        </div>
                    </Link></li>
                    <li><Link to="credits" className={styles.iconContainer}>
                        <img src="./icons/piggy_bank.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Кредити</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="cards" className={styles.iconContainer}>
                        <img src="./icons/cards.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Картки</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="securities" className={styles.iconContainer}>
                        <img src="./icons/securities.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Цінні папери</div>
                        </div>
                    </Link></li>
                    <li><Link to="auto_payments" className={styles.iconContainer}>
                        <img src="./icons/auto_payments.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Автоплатежі</div>
                        </div>
                    </Link></li>
                    <li><Link to="transport" className={styles.iconContainer}>
                        <img src="./icons/transport.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Транспорт</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="insurance" className={styles.iconContainer}>
                        <img src="./icons/insurance.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Страхування</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="auto" className={styles.iconContainer}>
                        <img src="./icons/auto.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Авто</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="services" className={styles.iconContainer}>
                        <img src="./icons/services.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Послуги</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="fun" className={styles.iconContainer}>
                        <img src="./icons/fun.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Розваги</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="good" className={styles.iconContainer}>
                        <img src="./icons/good.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Добро</div>
                        </div>
                    </Link></li>
                    <li><Link to="juniors" className={styles.iconContainer}>
                        <img src="./icons/juniors.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Юніори</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                    <li><Link to="business" className={styles.iconContainer}>
                        <img src="./icons/business.svg" alt=""/>
                        <div className={styles.iconWrapper}>
                            <div>Бізнес</div>
                            <img src="./icons/dir_right.svg" alt=""/>
                        </div>
                    </Link></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;