import { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { refreshButtonStyle, rowRadioUnitsStyle } from "../../../styles/styles";
import { defaultOptionsContext } from "../../../context/defaultOptions";

const RowRadioGroupUnitsController = () => {
  const [unitbeforeRefetch, setUnitbeforeRefetch] = useState("");
  const { unit, setUnit } = useContext(defaultOptionsContext);

  return (
    <>
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
              setUnitbeforeRefetch(event.target.value);
            }}
          />
          <FormControlLabel
            value="imperial"
            control={<Radio />}
            label="Fahrenheit"
            onChange={(event) => {
              setUnitbeforeRefetch(event.target.value);
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
      <Button
        css={refreshButtonStyle}
        onClick={() => setUnit(unitbeforeRefetch)}
        variant="outlined"
      >
        Refresh
      </Button>
    </>
  );
};

export default RowRadioGroupUnitsController;
