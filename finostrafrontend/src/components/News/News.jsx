import React from "react";
import styles from "./news.module.css";

function News({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.title}>
                            <span className={styles.text}>Що нового?</span>
                            <img src={isDarkMode ? "./icons/arrow-out-big.svg" : "./icons/arrow-out-big-white.svg"} alt=" "/>
                        </div>
                        <hr className={styles.hr}/>
                    </div>
                    <div className={styles.wrapper_item}>
                        <div className={styles.item}>
                            <img src="./img/percent.jpg" alt=" "/>
                            <div className={styles.title}>Спеціальні пропозиції та акції</div>
                        </div>
                        <div className={`${styles.out} ${styles.background_violet}`}>
                            <img src={isDarkMode ? "./icons/arrow-out.svg" : "./icons/arrow-out-white.svg"} alt=" "/>
                        </div>
                    </div>
                    <div className={styles.wrapper_item}>
                        <div className={styles.item}>
                            <img src="./img/leaf.jpg" alt=" "/>
                            <div className={styles.title}>Соціальні проєкти та ініціативи</div>
                        </div>
                        <div className={`${styles.out} ${styles.background_grey}`}>
                            <img src="./icons/arrow-out.svg" alt=" "/>
                        </div>
                    </div>
                    <div className={styles.wrapper_item}>
                        <div className={styles.item}>
                            <img src="./img/review.jpg" alt=" "/>
                            <div className={styles.title}>Відгуки клієнтів і успіхи</div>
                        </div>
                        <div className={`${styles.out} ${styles.background_violet}`}>
                            <img src={isDarkMode ? "./icons/arrow-out.svg" : "./icons/arrow-out-white.svg"} alt=" "/>
                        </div>
                    </div>
                    <div className={styles.wrapper_item}>
                        <div className={styles.item}>
                            <img src="./img/innovation.jpg" alt=" "/>
                            <div className={styles.title}>Інновації та технології</div>
                        </div>
                        <div className={`${styles.out} ${styles.background_grey}`}>
                            <img src="./icons/arrow-out.svg" alt=" "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;