"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./telephoneInput.module.css";
import AllCountries from "./AllCountries";
import useClickOutside from "@/utils/outsideClick";

const TelephoneInput = ({ countries }) => {
  const [isOpenCountryBox, setIsOpenCountryBox] = useState(false);
  const [country, setCountry] = useState(countries[11]?.flags?.svg);
  const [activeCountry, setActiveCountry] = useState(11);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => {
    setIsOpenCountryBox(false); // Close the div when clicking outside
  });

  const changeOpenState = () => {
    boxRef.current.focus();
    setIsOpenCountryBox((prev) => !prev);
  };

  return (
    <div className={styles.formTel} ref={containerRef}>
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
          ref={inputRef}
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
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default TelephoneInput;
