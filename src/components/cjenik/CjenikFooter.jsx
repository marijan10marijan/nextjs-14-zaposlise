import React from "react";
import styles from "./cjenik.module.css";
import Image from "next/image";

const CjenikFooter = () => {
  return (
    <div className={styles.cjenikBoxFooter}>
      <div className={styles.cjenikBoxContent}>
        <h2 className={styles.cjenikBoxTitle}>
          Mikropoduzeća (Rastimo zajedno)
        </h2>
        <p className={styles.cjenikBoxDesc}>
          Svaki početak je težak. Kako bi podržali i olakšali rast novim
          naraštajima poduzetnika, mikropoduzećima pružamo ekskluzivnih 30%
          popusta na sve oglase i pakete. Spadate li u kategoriju Mikropoduzeća,
          kontaktirajte nas odmah kako bi ostvarili popust.
        </p>
        <p>
          <em>
            * Tvrtka s manje od 10 zaposlenih, čiji godišnji promet i/ili
            godišnja bilanca ne prelazi 2 milijuna eura
          </em>
        </p>
        <button className={styles.cjenikBoxBtn}>Kontaktiraj nas</button>
      </div>
      <Image
        src={
          "https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/exclusive-discount-icon@2x.png"
        }
        alt="agencije i velika poduzeca ikona"
        width={162}
        height={162}
        
      />
    </div>
  );
};

export default CjenikFooter;
