import React from "react";
import styles from "./oNamaMapData.module.css";

const ONamaMapData = () => {
  return (
    <div className={styles.podaciTvrtke}>
      <div className={styles.podaciTvrtkeBox}>
        <p className={styles.podaciTvrtkeBoxTitle}>Tvrtka:</p>
        <p className={styles.podaciTvrtkeBoxText}>ICT Insisto d.o.o.</p>
      </div>
      <div className={styles.podaciTvrtkeBox}>
        <p className={styles.podaciTvrtkeBoxTitle}>OIB:</p>
        <p className={styles.podaciTvrtkeBoxText}>56015368968</p>
        <p className={styles.podaciTvrtkeBoxText}>
          Društvo je upisano u registar Trgovačkoga suda u Zagrebu
        </p>
      </div>
      <div className={styles.podaciTvrtkeBox}>
        <p className={styles.podaciTvrtkeBoxTitle}>MBS:</p>
        <p className={styles.podaciTvrtkeBoxText}>081176534</p>
        <p className={styles.podaciTvrtkeBoxTitle}>Temeljni kapital:</p>
        <p className={styles.podaciTvrtkeBoxText}>2654,46 €</p>
      </div>
      <div className={styles.podaciTvrtkeBox}>
        <p className={styles.podaciTvrtkeBoxTitle}>Uprava:</p>
        <p className={styles.podaciTvrtkeBoxText}>
          Ivan Rendulić, direktor zastupa društvo pojedinačno i samostalno
        </p>
      </div>
    </div>
  );
};

export default ONamaMapData;
