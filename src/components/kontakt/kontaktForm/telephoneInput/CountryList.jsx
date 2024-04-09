import React from "react";
import styles from "./telephoneInput.module.css";

const CountryList = ({ countryData, setCountryData, countries }) => {
  return (
    <>
      {countries.map((country) => (
        <ul key={country.name.common} className={styles.countryList}>
          <li className={styles.countryListElement}>
            <img src={country.flags.svg} alt="country flag" />
            <p>{country.name.common}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default CountryList;
