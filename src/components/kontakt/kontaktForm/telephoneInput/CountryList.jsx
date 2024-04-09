import React from "react";
import styles from "./telephoneInput.module.css";

const CountryList = ({ country, setCountry, countries }) => {
  return (
    <>
      {countries.map((country) => (
        <ul key={country.name.common} className={styles.countryList}>
          <li className={styles.countryListElement}>
            <img
              src={country.flags.svg}
              alt="country flag"
              style={{ width: "20px", height: "11px" }}
            />
            <p className={styles.countryListElementName}>
              {country.name.common}{" "}
              {country.name.nativeName?.hrv?.common
                ? `(${country.name.nativeName.hrv.common})`
                : ""}
              {country.name.nativeName?.mya?.common
                ? `(${country.name.nativeName.mya.common})`
                : ""}
              {country.name.nativeName?.ara?.common
                ? `(${country.name.nativeName.ara.common})`
                : ""}
              {country.name.nativeName?.ber?.common
                ? `(${country.name.nativeName.ber.common})`
                : ""}
              {country.name.nativeName?.deu?.common
                ? `(${country.name.nativeName.deu.common})`
                : ""}
              {country.name.nativeName?.bos?.common
                ? `(${country.name.nativeName.bos.common})`
                : ""}
              {country.name.nativeName?.srp?.common
                ? `(${country.name.nativeName.srp.common})`
                : ""}
            </p>
            <p className={styles.countryListElementCode}>
              {country.idd?.root}
              {country.idd?.suffixes?.length <= 1
                ? country.idd?.suffixes
                : null}
            </p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default CountryList;
