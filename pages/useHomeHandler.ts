import { useState } from "react";

type countryType = {
  code?: string;
  label: string;
  phone?: string;
}

const countryDefaultState = {
  code: "",
  label: "",
  phone: ""
}

const useHomeHandler = () => {
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<countryType>(countryDefaultState);

  const isSearchFieldsFilled = city?.length > 0 && country?.label?.length > 0

  return {
    country,
    city,
    setCountry,
    setCity,
    isSearchFieldsFilled
  }
}

export default useHomeHandler
