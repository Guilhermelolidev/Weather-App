/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../../utils/countries";
import {
  countrySelectStyle,
  fullWidthSmallDevicesStyle,
} from "../../../styles/styles";

const CountrySelect = ({ setCountry }: any) => {
  return (
    <Autocomplete
      css={[fullWidthSmallDevicesStyle, countrySelectStyle]}
      id="country-select-demo"
      options={countries}
      autoHighlight
      onChange={(event: any, newValue: string | null) => {
        setCountry(newValue);
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
