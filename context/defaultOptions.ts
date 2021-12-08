import React from "react";

const defaultOptionsContext = React.createContext({});

const Provider = defaultOptionsContext.Provider;

export { defaultOptionsContext, Provider as OptionsProvider };
