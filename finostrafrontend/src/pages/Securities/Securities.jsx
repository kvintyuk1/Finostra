import React from "react";
import styles from "./securities.module.css";

function Securities() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Securities</h1>
      <div className={styles.comingSoon}>Coming Soon</div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}

export default Securities;
