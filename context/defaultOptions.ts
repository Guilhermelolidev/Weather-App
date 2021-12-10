import React from "react";
import type { countryType } from "./types";

type onSubmitParam = {
  country: object;
  city: string;
};
interface IdefaultOptionsContext {
  onSubmitSearch: ({ country, city }: onSubmitParam) => object;
  setUnit: (unit: string) => void;
  setCountry: (country: object) => object;
  city: string;
  unit: string;
  country: countryType;
}

// @ts-ignore
const defaultOptionsContext = React.createContext<IdefaultOptionsContext>({});

const Provider = defaultOptionsContext.Provider;

export { defaultOptionsContext, Provider as OptionsProvider };
