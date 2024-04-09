import React from "react";

import CountryList from "./CountryList";

const AllCountries = ({ countries, setCountry }) => {
  return <CountryList countries={countries} setCountry={setCountry} />;
};

export default AllCountries;
