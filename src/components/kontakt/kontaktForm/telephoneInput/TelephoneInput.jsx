"use client";
import React, { useEffect, useState } from "react";
import styles from "./telephoneInput.module.css";
import AllCountries from "./AllCountries";
import Image from "next/image";

const TelephoneInput = ({ countries }) => {
  const [isOpenCountryBox, setIsOpenCountryBox] = useState(false);
  const [country, setCountry] = useState(countries[2]?.flags?.svg);

  const changeOpenState = () => {
    setIsOpenCountryBox((prev) => !prev);
  };

  // document.addEventListener("click", (e) => {
  //   if (!e.target.closest(`.${styles.formTel}`)) {
  //     setIsOpenCountryBox(false);
  //   }
  // });

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
          <img
            style={{ width: "20px", height: "11px" }}
            src={country}
            alt="zastava države"
          />
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
          country={country}
          setCountry={setCountry}
          setIsOpenCountryBox={setIsOpenCountryBox}
        />
      </div>
    </div>
  );
};

export default TelephoneInput;
