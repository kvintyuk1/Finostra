import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`${styles.footer} ${isDarkMode ? styles.dark_mode : styles.light_mode}`}>
      <span сlassName={styles.copyright}>© 2025 Всі права мабуть захищені </span>
    </div>
  );
};

export default Footer;
