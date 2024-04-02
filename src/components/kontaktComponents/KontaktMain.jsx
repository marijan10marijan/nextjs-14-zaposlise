import React from "react";
import styles from "./kontakt.module.css";
import KontaktForm from "./KontaktForm";

const KontaktMain = ({title, subtitle}) => {
  return (
    <div className={styles.kontaktMainFull}>
      <div className={`${styles.kontaktMain} ${styles.container}`}>
        <div className={styles.kontaktLeft}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <KontaktForm />
        </div>
        <div className={styles.kontaktRight}></div>
        <div className={styles.kontaktDecoration}></div>
      </div>
    </div>
  );
};

export default KontaktMain;
