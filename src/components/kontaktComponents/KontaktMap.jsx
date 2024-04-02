import React from "react";
import styles from "./kontakt.module.css";
import Link from "next/link";
import MapBox from "./MapBox";

const KontaktMap = () => {
  return (
    <div className={styles.mapFull}>
      <div className={styles.mapBackground}>
        <div className={`${styles.mapInsideContainer} ${styles.container}`}>
          <div className={styles.mapLeft}></div>
          <div className={styles.mapRight}>
            <MapBox page={'kontakt'} />
          </div>
        </div>
      </div>
        <div className={styles.mapRightMobile}>
          <div className={styles.mapRightBox}>
            <h3>Kontaktiraj nas već danas</h3>
            <div className={styles.mapAddress}>
              <img
                src="//zaposlise.hr/wp-content/themes/ngtheme/assets/css/../i/icon-location2.png"
                alt="ikona adrese"
                className={styles.mapAddressImage}
              />
              <div>
                <p>Adresa:</p>
                <p className={styles.adresa}>
                  Gornjostupnička 27 b Gornji Stupnik
                </p>
              </div>
            </div>
            <div className={styles.mapEmail}>
              <img
                src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/icon-email.png"
                alt="ikona emaila"
                className={styles.mapEmailImage}
              />
              <div>
                <p>E-mail:</p>
                <Link
                  className={styles.mapEmailLink}
                  href="mailto:podrska@zaposlise.hr"
                >
                  podrska@zaposlise.hr
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default KontaktMap;
