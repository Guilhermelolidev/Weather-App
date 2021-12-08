import { useContext, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { rowRadioUnitsStyle } from "../../../styles/styles";
import { defaultOptionsContext } from "../../../context/defaultOptions";

const RowRadioGroupUnits = () => {
  const { unit, setUnit } = useContext(defaultOptionsContext);

  return (
    <FormControl css={rowRadioUnitsStyle} component="fieldset">
      <FormLabel component="legend">Unit</FormLabel>
      <RadioGroup
        row
        aria-label="Unit"
        name="row-radio-buttons-group"
        defaultValue={unit}
      >
        <FormControlLabel
          value="metric"
          control={<Radio />}
          label="Celsius(metric)"
          onChange={(event) => {
            setUnit(event.target.value);
          }}
        />
        <FormControlLabel
          value="imperial"
          control={<Radio />}
          label="Fahrenheit"
          onChange={(event) => {
            setUnit(event.target.value);
          }}
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Kelvin"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioGroupUnits;
