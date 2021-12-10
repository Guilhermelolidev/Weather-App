import { useState } from "react";

type countryType = {
  code?: string;
  label: string;
  phone?: string;
};

interface IapplicationState {
  unit: string;
  city: string;
  country: countryType;
}

type TypeOnSubmit = Omit<IapplicationState, "unit">;

const countryDefaultState = {
  code: "",
  label: "",
  phone: "",
};

const INITIAL_STATE = {
  unit: "metric",
  city: "",
  country: countryDefaultState,
};

const useHomeHandler = () => {
  const [myApplicationState, setMyApplicationState] =
    useState<IapplicationState>(INITIAL_STATE);

  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<countryType>(countryDefaultState);

  const setUnit = (unit: string) =>
    setMyApplicationState((prevState) => {
      return { ...prevState, unit };
    });

  const onSubmitSearch = ({ country, city }: TypeOnSubmit) =>
    setMyApplicationState((prevState) => {
      return { ...prevState, country, city };
    });

  const isSearchFieldsFilled = city?.length > 0 && country?.label?.length > 0;

  return {
    myApplicationState,
    onSubmitSearch,
    setUnit,
    country,
    city,
    setCountry,
    setCity,
    isSearchFieldsFilled,
  };
};

export default useHomeHandler;
