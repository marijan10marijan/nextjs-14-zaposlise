"use client";
import React, { useRef, useState } from "react";
import styles from "./telephoneInput.module.css";
import AllCountries from "./AllCountries";

const TelephoneInput = ({ countries }) => {
  const [isOpenCountryBox, setIsOpenCountryBox] = useState(false);
  const [country, setCountry] = useState(countries[11]?.flags?.svg);
  const [activeCountry, setActiveCountry] = useState(11);
  const boxRef = useRef(null);

  const changeOpenState = () => {
    boxRef.current.focus();
    setIsOpenCountryBox((prev) => !prev);
  };

  // window.addEventListener("click", (e) => {
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
        ref={boxRef}
        tabIndex={0}
        className={
          isOpenCountryBox
            ? `${styles.countriesBox}`
            : `${styles.countriesBox} ${styles.hiddenCountriesBox}`
        }
      >
        <AllCountries
          countries={countries}
          setCountry={setCountry}
          setIsOpenCountryBox={setIsOpenCountryBox}
          activeCountry={activeCountry}
          setActiveCountry={setActiveCountry}
        />
      </div>
    </div>
  );
};

export default TelephoneInput;
