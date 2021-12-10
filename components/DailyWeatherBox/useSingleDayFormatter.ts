import { useContext } from "react";
import { formatDate } from "../../utils/formatters";
import { defaultOptionsContext } from "../../context/defaultOptions";

const renderTemperatureSymbol = (unit: string) => {
  return unit === "metric" ? "°C" : "°F";
};

interface EnumSingleDayItem {
  singleDay: {
    clouds: object;
    dt: number;
    dt_txt: string;
    main: object;
    sys: object;
    visibility: number;
    weather: object;
    wind: object;
  };
}

const useSingleDayFormatter = ({ singleDay }: EnumSingleDayItem) => {
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
export type { EnumSingleDayItem };
