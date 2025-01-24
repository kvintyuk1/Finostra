import React from "react";
import styles from "./banner.module.css";

function Banner({isDarkMode}) {
    return (
        <div className={`${isDarkMode ? `${styles.dark_mode}` : `${styles.light_mode}`}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.title}>Станьте нашим клієнтом — отримайте бонус. До 5% кешбеку на покупки!</span>
                    <img className={styles.wrapper_img} src="./img/flower.png" alt=" "/>
                </div>
                <img  className={styles.wrapper_laptop} src="./img/laptop.png" alt=" "/>
            </div>
        </div>
    )
}

export default Banner;