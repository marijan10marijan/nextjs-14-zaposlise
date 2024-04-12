import React from "react";
import styles from "./cjenik.module.css";
import Image from "next/image";

const CjenikBoxes = () => {
  return (
    <div className={styles.cjenikBoxes}>
      <div className={styles.cjenikBox}>
        <div className={styles.cjenikBoxContent}>
          <p className={styles.cjenikBoxTitle}>Agencije i velika poduzeća</p>
          <p className={styles.cjenikBoxDesc}>
            Vodite agenciju i zapošljavate veliki broj novih radnika svake
            godine? Kontaktirajte nas za personaliziranu ponudu sukladno Vašim
            potreba
          </p>
          <button className={styles.cjenikBoxBtn}>Kontaktiraj nas</button>
        </div>
        <Image
          src={
            "https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/agency-icon@2x.png"
          }
          alt="agencije i velika poduzeca ikona"
          width={162}
          height={162}
        />
      </div>
      <div className={styles.cjenikBox}>
        <div className={styles.cjenikBoxContent}>
          <p className={styles.cjenikBoxTitle}>Neprofitne organizacije</p>
          <p className={styles.cjenikBoxDesc}>
            Zaposlise.hr prepoznaje pozitivni utjecaj neprofitnih organizacija
            na društvo. Želimo podupirati vaš rad besplatnom objavom oglasa za
            posao. Kontaktirajte nas kako biste podijelili svoje prilike za
            zapošljavanje novih kolega s Zaposlise.hr zajednicom.
          </p>
          <button className={styles.cjenikBoxBtn}>Kontaktiraj nas</button>
        </div>
        <Image
          src={
            "https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/non-profit-icon@2x.png"
          }
          alt="neprofitne organizacije ikona"
          width={162}
          height={162}
        />
      </div>
    </div>
  );
};

export default CjenikBoxes;
