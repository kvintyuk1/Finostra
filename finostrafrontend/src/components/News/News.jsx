import React from "react";
import styles from "./news.module.css";

const newsItems = [
    {
        img: "percent.jpg",
        title: "Спеціальні пропозиції та акції",
        color: styles.background_violet,
        iconDark: "arrow-out.svg",
        iconLight: "arrow-out-white.svg"
    },
    {img: "leaf.jpg", title: "Соціальні проєкти та ініціативи", color: styles.background_grey, hasArrow: true},
    {
        img: "review.jpg",
        title: "Відгуки клієнтів і успіхи",
        color: styles.background_violet,
        iconDark: "arrow-out.svg",
        iconLight: "arrow-out-white.svg"
    },
    {img: "innovation.jpg", title: "Інновації та технології", color: styles.background_grey, hasArrow: true},
]

function News({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_info}>
                    <div className={styles.wrapper_title}>
                        <div className={styles.title}>
                            <span className={styles.text}>Що нового?</span>
                            <img src={isDarkMode ? "./icons/arrow-out-big.svg" : "./icons/arrow-out-big-white.svg"}
                                 alt=" "/>
                        </div>
                        <hr className={styles.hr}/>
                    </div>

                    {newsItems.map(({img, title, color, hasArrow, iconDark, iconLight}) => (
                        <div className={styles.wrapper_item}>
                            <div className={styles.item}>
                                <img src={`./img/${img}`} alt=" "/>
                                <div className={styles.title}>{title}</div>
                            </div>
                            <div className={`${styles.out} ${color}`}>
                                {hasArrow ? (
                                    <img src="./icons/arrow-out.svg" alt=" "/>
                                ) : (
                                    <img src={isDarkMode ? `./icons/${iconDark}` : `./icons/${iconLight}`}
                                         alt=" "/>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News;