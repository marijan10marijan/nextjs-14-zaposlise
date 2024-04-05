import React from "react";
import styles from "./kontaktForm.module.css";
import TelephoneInput from "./telephoneInput/TelephoneInput";

const KontaktForm = () => {
  return (
    <form className={styles.form}>
      {/* PRVI FORM BOX ************************ **************************/}
      <div className={styles.formBox}>
        <div className={styles.formIme}>
          <label htmlFor="ime">
            Ime <span>*</span>
          </label>
          <input type="text" id="ime" placeholder="Ime" required />
        </div>
        <div className={styles.formPrezime}>
          <label htmlFor="prezime">
            Prezime <span>*</span>
          </label>
          <input type="text" id="prezime" placeholder="Prezime" required />
        </div>
      </div>
      {/* DRUGI FORM BOX ************************ **************************/}
      <div className={styles.formBox}>
        <div className={styles.formEmail}>
          <label htmlFor="email">
            E-mail <span>*</span>
          </label>
          <input type="email" id="email" placeholder="E-mail adresa" required />
        </div>

        <TelephoneInput />
      </div>
      {/* TRECI FORM BOX ************************ **************************/}
      <div className={styles.formBox}>
        <div className={styles.formPoruka}>
          <label htmlFor="poruka">
            Poruka <span>*</span>
          </label>
          <textarea
            id="poruka"
            cols="2"
            rows="4"
            placeholder="Poruka"
          ></textarea>
        </div>
      </div>
      {/* CETVRTI FORM BOX ************************ **************************/}
      <div className={styles.formBox}>
        <button type="submit" className={styles.formButton}>
          Pošalji!
        </button>
      </div>
    </form>
  );
};

export default KontaktForm;

{
  /* 
  JAVASCRIPT ZA FORMU ****************************************************************************************
<script type="text/javascript">window.fluent_form_ff_form_instance_1_1 = {"id":"1","settings":{"layout":{"labelPlacement":"top","helpMessagePlacement":"with_label","errorMessagePlacement":"inline","cssClassName":"","asteriskPlacement":"asterisk-right"},"restrictions":{"denyEmptySubmission":{"enabled":false}}},"form_instance":"ff_form_instance_1_1","form_id_selector":"fluentform_1","rules":{"names[first_name]":{"required":{"value":true,"message":"Ovo polje je obaveno popuniti"}},"names[middle_name]":{"required":{"value":false,"message":"This field is required"}},"names[last_name]":{"required":{"value":true,"message":"Ovo polje je obaveno popuniti"}},"email":{"required":{"value":true,"message":"Ovo polje je obavezno popuniti"},"email":{"value":true,"message":"Polje mora sadr\u017eavati validan e-mail"}},"phone":{"required":{"value":true,"message":"Ovo polje je obavezno popuniti"},"valid_phone_number":{"value":true,"message":"Molimo unesite ispravnu formu broja telefona"}},"message":{"required":{"value":true,"message":"This field is required"}}}};</script>
 */
}
