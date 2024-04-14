import React from "react";
import styles from "./cjenik.module.css";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const CjenikKontaktForm = ({ setActiveForm }) => {
  return (
    <div className={styles.cjenikForm}>
      <div className={styles.cjenikFormWrapper}>
        <button
          onClick={() => setActiveForm(false)}
          className={styles.cjenikFormClose}
        >
          <IoClose size={38} fill="black" />
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
        <div className={styles.cjenikFormFormaDiv}>
          <h3>Kontaktirajte nas i pronađimo Vam novog kolegu zajedno</h3>
          <p>Pošalji nam upit, ubrzo ćemo te kontaktirati.</p>
          <form className={styles.cjenikFormForma}>
            <div>
              <label htmlFor="tel">Telefon</label>
              <input type="tel" id="tel" placeholder="099 xxx xxxx" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="primjer@email.com" />
            </div>
            <div>
              <label htmlFor="text">Poruka</label>
              <textarea
                placeholder="Unesi poruku"
                id="text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className={styles.cjenikFormFormaBtn}>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CjenikKontaktForm;
