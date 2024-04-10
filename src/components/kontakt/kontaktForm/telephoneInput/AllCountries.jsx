import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({
  countries,
  setCountry,
  setIsOpenCountryBox,
  activeCountry,
  setActiveCountry,
  inputRef
}) => {
  return (
    <CountryList
      countries={countries}
      setCountry={setCountry}
      setIsOpenCountryBox={setIsOpenCountryBox}
      activeCountry={activeCountry}
      setActiveCountry={setActiveCountry}
      inputRef={inputRef}
    />
  );
};

export default AllCountries;
