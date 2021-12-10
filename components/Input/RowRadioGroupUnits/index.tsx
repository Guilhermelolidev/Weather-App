import { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { refreshButtonStyle, rowRadioUnitsStyle } from "../../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { defaultOptionsContext } from "../../../context/defaultOptions";
import ReplayIcon from "@mui/icons-material/Replay";

const RowRadioGroupUnitsController = () => {
  const [unitbeforeRefetch, setUnitbeforeRefetch] = useState("");
  const isMediumDevices = useMediaQuery("(max-width:900px)");
  const isSmallDevices = useMediaQuery("(max-width:600px)");

  const { unit, setUnit } = useContext(defaultOptionsContext);

  return (
    <>
      <FormControl css={rowRadioUnitsStyle} component="fieldset">
        {!isMediumDevices && <FormLabel component="legend">Unit</FormLabel>}
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
              const value = (event.target as HTMLInputElement).value;
              setUnitbeforeRefetch(value);
            }}
          />
          {isMediumDevices && (
            <Button
              css={refreshButtonStyle}
              onClick={() => setUnit(unitbeforeRefetch)}
              variant="outlined"
            >
              {isSmallDevices ? <ReplayIcon /> : "Refresh"}
            </Button>
          )}
          <FormControlLabel
            value="imperial"
            control={<Radio />}
            label="Fahrenheit"
            onChange={(event) => {
              const value = (event.target as HTMLInputElement).value;
              setUnitbeforeRefetch(value);
            }}
          />
          {!isMediumDevices && (
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="Kelvin"
            />
          )}
        </RadioGroup>
      </FormControl>
      {!isMediumDevices && (
        <Button
          css={refreshButtonStyle}
          onClick={() => setUnit(unitbeforeRefetch)}
          variant="outlined"
        >
          Refresh
        </Button>
      )}
    </>
  );
};

export default RowRadioGroupUnitsController;
