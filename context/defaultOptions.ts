import React from "react";
import type { countryType } from "./types";

type onSubmitParam = {
  country: object;
  city: string;
};
interface IdefaultOptionsContext {
  onSubmitSearch: ({ country, city }: onSubmitParam) => object;
  setUnit: (unit: string) => void;
  city: string;
  unit: string;
  country: countryType;
}

const defaultOptionsContext = React.createContext<IdefaultOptionsContext>({});

const Provider = defaultOptionsContext.Provider;

export { defaultOptionsContext, Provider as OptionsProvider };
