import React from "react";
import { getCountries } from "@/utils/getCountries";

import TelephoneInput from "./TelephoneInput";

const Telephone = async () => {
  const data = await getCountries();
  const countries = data;

  return <TelephoneInput countries={countries} />;
};

export default Telephone;
