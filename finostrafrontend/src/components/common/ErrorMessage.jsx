import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={`${styles.errorContainer} ${className || ""}`}>
      <div className={styles.errorIcon}>⚠️</div>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
