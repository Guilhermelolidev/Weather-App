import { useContext } from "react";
import { formatDate } from "../../utils/formatters";
import { defaultOptionsContext } from "../../context/defaultOptions";

const renderTemperatureSymbol = (unit) => {
  return unit === "metric" ? "°C" : "°F";
};

const useSingleDayFormatter = ({ singleDay }) => {
  const { unit } = useContext(defaultOptionsContext);

  const currentDay = formatDate(Object.keys(singleDay).toString());

  const weatherDetailsForOnePeriod = Object.values(singleDay).flat()[0];

  const { weather, main } = weatherDetailsForOnePeriod;

  const temperatureSymbol = renderTemperatureSymbol(unit);

  return {
    weather: weather[0],
    main,
    currentDay,
    temperatureSymbol,
  };
};

export default useSingleDayFormatter;
