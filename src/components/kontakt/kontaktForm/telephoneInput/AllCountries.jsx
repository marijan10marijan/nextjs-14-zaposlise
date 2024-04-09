import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({ countries, countryData, setCountryData }) => {
  return (
    <CountryList
      countries={countries}
      countryData={countryData}
      setCountryData={setCountryData}
    />
  );
};

export default AllCountries;
