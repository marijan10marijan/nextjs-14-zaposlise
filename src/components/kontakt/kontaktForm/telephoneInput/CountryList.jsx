import React from "react";
import styles from "./telephoneInput.module.css";

const CountryList = ({
  setCountry,
  countries,
  setIsOpenCountryBox,
  activeCountry,
  setActiveCountry,
  inputRef,
}) => {
  return (
    <>
      {countries.map((country, index) => (
        <ul
          onClick={() => setIsOpenCountryBox(false)}
          key={country.name.common}
          className={styles.countryList}
        >
          <li
            onClick={() =>
              `${setCountry(country.flags.svg)} ${setActiveCountry(
                index
              )}  ${inputRef.current.focus()}`
            }
            className={
              activeCountry === index
                ? `${styles.countryListElement} ${styles.activeCountry}`
                : `${styles.countryListElement}`
            }
          >
            <img
              src={country.flags.svg}
              alt="country flag"
              style={{ width: "20px", height: "11px" }}
            />
            <p className={styles.countryListElementName}>
              {country.name.common}{" "}
            </p>
            <p>
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
