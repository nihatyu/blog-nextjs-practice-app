import React from "react";
import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.container404}>
      <div className={styles.content}>
        <h1 className={styles.title404}>404</h1>
        <p className={styles.description404}>Oops! Sayfa bulunamadı.</p>
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
          <div className={styles.meteor}></div>
        </div>
        <a href="/" className={styles.link404}>
          Ana sayfaya geri dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
