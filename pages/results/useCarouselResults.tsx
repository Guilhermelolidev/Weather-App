import DailyWeatherBox from "../../components/DailyWeatherBox";

type carouselTypes = {
  isMediumDevices: boolean;
  isSmallDevices: boolean;
  weatherPeriodsGroupedByDay: any[];
};

const useCarouselResults = ({
  isMediumDevices,
  isSmallDevices,
  weatherPeriodsGroupedByDay,
}: carouselTypes) => {
  let sliderItems: number = 3;
  isMediumDevices ? (sliderItems = 2) : sliderItems;
  isSmallDevices ? (sliderItems = 1) : sliderItems;

  const items: Array<any> = [];

  for (let i = 0; i < weatherPeriodsGroupedByDay.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        weatherPeriodsGroupedByDay
          .slice(i, i + sliderItems)
          .map((singleDay, index) => {
            return <DailyWeatherBox key={index} singleDay={singleDay} />;
          })
      );
    }
  }

  return {
    items,
  };
};

export default useCarouselResults;
