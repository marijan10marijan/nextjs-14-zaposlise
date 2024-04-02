import React from "react";
import styles from "./kontakt.module.css";

const KontaktHeader = () => {
  return (
    <div className={styles.kontaktHeaderContainer}>
      <div className={styles.kontaktHeaderBackground}></div>
      <div className={styles.container}>
      <div className={styles.kontaktDesc}>
        <h1>Kontakt</h1>
        <p>
          Vjerujemo u direktnu komunikaciju te da oglasi za posao trebaju
          sadržavati i pogodnosti, ne samo uvjete.
        </p>
      </div>
      </div>
      <div className={styles.kontaktHeaderDecoration}></div>
    </div>
  );
};

export default KontaktHeader;
