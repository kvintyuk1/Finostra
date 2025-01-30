import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`${styles.footer} ${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
      <div className={styles.Frame614}>
        <div className={styles.Rectangle2}></div>
        <div className={styles.Logo}>Finostra</div>
      </div>

      <div className={styles.footerLinks}>
        <a href="/regulations" className={styles.link}>Регламент і тарифи</a>
        <a href="/personal-data" className={styles.link}>Про персональні дані</a>
        <a href="/security" className={styles.link}>Безпека</a>
        <a href="/api" className={styles.link}>API</a>
      </div>

     
      <div className={styles.phone}>+380 504 61 21 24</div>

     
      <div className={styles.license}>© 2024 Finostra Ліцензія №13 від 06.11.2017</div>

      
      <div className={styles.frame641}>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.appleLink}
        >
          <div className={styles.appleIcon}>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.frame640}>
            <div className={styles.available}>Доступно в</div>
            <div className={styles.appleStore}>Apple Store</div>
          </div>
        </a>
      </div>
      <div className={styles.frame833}>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googlePlayLink}
        >
          <div className={styles.googlePlayIcon}>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.frame640}>
            <div className={styles.available}>Доступно в</div>
            <div className={styles.googlePlay}>Google Play</div>
          </div>
        </a>
      </div>


    </div>
  );
};

export default Footer;
