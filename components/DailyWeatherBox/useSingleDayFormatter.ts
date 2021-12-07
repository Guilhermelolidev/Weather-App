import { formatDate } from "../../utils/formatters";

const useSingleDayFormatter = ({ singleDay }) => {
  const currentDay = formatDate(Object.keys(singleDay).toString());

  const weatherDetailsForOnePeriod = Object.values(singleDay).flat()[0];

  const { weather, main } = weatherDetailsForOnePeriod;

  return {
    weather: weather[0],
    main,
    currentDay,
  };
};

export default useSingleDayFormatter;
