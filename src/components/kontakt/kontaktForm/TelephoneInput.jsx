import React from "react";
import styles from "./kontaktForm.module.css";

const TelephoneInput = () => {
  return (
    <div className={styles.formTel}>
      <label htmlFor="tel">
        Telefon <span>*</span>
      </label>
      <div className={styles.formTelSelector}>
        <select name="" id="">
          <option value="hr"></option>
        </select>
        <input
          type="tel"
          id="tel"
          placeholder="Broj mobitela / fiksnog telefona"
          required
        />
      </div>
    </div>
  );
};

export default TelephoneInput;
