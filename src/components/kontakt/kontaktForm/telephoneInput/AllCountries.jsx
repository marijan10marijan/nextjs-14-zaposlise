import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({ countries, setCountryData }) => {
  return <CountryList countries={countries} setCountryData={setCountryData} />;
};

export default AllCountries;
