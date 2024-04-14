import React from "react";
import styles from "./cjenik.module.css";
import Image from "next/image";

const CjenikKontaktForm = ({ setActiveForm }) => {
  return (
    <div className={styles.cjenikForm}>
      <div className={styles.cjenikFormWrapper}>
        <button
          onClick={() => setActiveForm(false)}
          className={styles.cjenikFormClose}
        >
          x
        </button>
        <div className={styles.cjenikFormImgDiv}>
          <Image
            className={styles.cjenikFormImg}
            src={
              "https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/modal-img@2x.jpg"
            }
            alt="slika kontakt forme gdje muskarac gleda u mobitel"
            fill
          />
        </div>
        <div>
          <h3>Kontaktirajte nas i pronađimo Vam novog kolegu zajedno</h3>
          <p>Pošalji nam upit, ubrzo ćemo te kontaktirati.</p>
        </div>
      </div>
    </div>
  );
};

export default CjenikKontaktForm;
