import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({
  countries,
  country,
  setCountry,
  setIsOpenCountryBox,
}) => {
  return (
    <CountryList
      countries={countries}
      country={country}
      setCountry={setCountry}
      setIsOpenCountryBox={setIsOpenCountryBox}
    />
  );
};

export default AllCountries;
