import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({
  countries,
  setCountry,
  setIsOpenCountryBox,
  activeCountry,
  setActiveCountry,
}) => {
  return (
    <CountryList
      countries={countries}
      setCountry={setCountry}
      setIsOpenCountryBox={setIsOpenCountryBox}
      activeCountry={activeCountry}
      setActiveCountry={setActiveCountry}
    />
  );
};

export default AllCountries;
