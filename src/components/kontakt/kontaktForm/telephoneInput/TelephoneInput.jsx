"use client";
import React, { useState } from "react";
import styles from "./telephoneInput.module.css";
import AllCountries from "./AllCountries";
import Image from "next/image";

const TelephoneInput = ({ countries }) => {
  const [isOpenCountryBox, setIsOpenCountryBox] = useState(false);
  const [country, setCountry] = useState(countries[2]?.flags?.svg);

  const changeOpenState = () => {
    setIsOpenCountryBox((prev) => !prev);
  };
  window.addEventListener("click", (e) => {
    if (!e.target.closest(`.${styles.formTel}`)) {
      setIsOpenCountryBox(false);
    }
  });

  return (
    <div className={styles.formTel}>
      <label htmlFor="tel">
        Telefon <span>*</span>
      </label>
      <div className={styles.formTelSelector}>
        <div
          className={
            isOpenCountryBox
              ? `${styles.formTelCountry} ${styles.isActiveCountry}`
              : `${styles.formTelCountry}`
          }
          onClick={changeOpenState}
        >
          <Image width={20} height={11} src={country} alt="zastava države" />
          <p></p>
        </div>
        <input
          type="tel"
          id="tel"
          placeholder="Broj mobitela / fiksnog telefona"
          required
        />
      </div>
      <div
        className={
          isOpenCountryBox
            ? `${styles.countriesBox}`
            : `${styles.countriesBox} ${styles.hiddenCountriesBox}`
        }
      >
        <AllCountries
          countries={countries}
          countryData={countryData}
          isOpenCountryBox={isOpenCountryBox}
        />
      </div>
    </div>
  );
};

export default TelephoneInput;
