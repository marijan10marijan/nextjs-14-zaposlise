import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({ countries, country, setCountry }) => {
  return (
    <CountryList
      countries={countries}
      country={country}
      setCountry={setCountry}
    />
  );
};

export default AllCountries;
