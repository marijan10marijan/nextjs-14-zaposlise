import React from "react";
import styles from "./oNama.module.css";
import Link from "next/link";

const ONamaHeader = () => {
  return ( 
    <section className={styles.header}>
      <div className={styles.headerBackground}></div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerLeft}>
          <h1 className={styles.headerContainerTitle}>
            Mijenjamo način pronalaska talenata
          </h1>
          <p className={styles.headerContainerText}>
            Vjerujemo u direktnu komunikaciju u to da oglasi za posao moraju
            komunicirati i pogodnosti, ne samo uvjete.
          </p>
          <Link
            className={styles.headerContainerLink}
            href="https://posao.zaposlise.hr/"
            target="_blank"
          >
            Iskušajte nas!
          </Link>
        </div>
        <div className={styles.headerContainerRight}></div>
      </div>
    </section>
  );
};

export default ONamaHeader;
