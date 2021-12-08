import { useContext } from "react";
import withServerData from "../../components/withServerData";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  barChartWrapperStyle,
  controlsGridStyle,
  carouselStyle,
  controlsWrapperStyle,
  weatherSliderWrapperStyle,
} from "../../styles/styles";
import DailyWeatherBox from "../../components/DailyWeatherBox";
import useResultsAndBuildArray from "./useResultsAndBuildDays";
import RowRadioGroupUnits from "../../components/Input/RowRadioGroupUnits";
import Carousel from "react-material-ui-carousel";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { defaultOptionsContext } from "../../context/defaultOptions";

const ResultsContainer = ({ list, city: cityInfo }) => {
  const { weatherPeriodsGroupedByDay } = useResultsAndBuildArray({
    list,
    cityInfo,
  });

  return (
    <Container maxWidth="md">
      <Grid container>
        <Box height="100vh" width="100vw" alignItems="center">
          <Grid
            css={controlsGridStyle}
            container
            justifyContent="space-evenly"
            alignItems="baseline"
          >
            <Box
              css={controlsWrapperStyle}
              width="75%"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <RowRadioGroupUnits />
            </Box>
          </Grid>
          <Grid css={weatherSliderWrapperStyle} container>
            <Carousel
              css={carouselStyle}
              navButtonsAlwaysVisible
              autoPlay={false}
              indicators={false}
              NextIcon={<ArrowRightOutlinedIcon />}
              PrevIcon={<ArrowLeftOutlinedIcon />}
            >
              {weatherPeriodsGroupedByDay
                .slice(0, 3)
                .map((singleDay, index) => (
                  <DailyWeatherBox key={index} singleDay={singleDay} />
                ))}
              {weatherPeriodsGroupedByDay
                .slice(3, 5)
                .map((singleDay, index) => (
                  <DailyWeatherBox key={index} singleDay={singleDay} />
                ))}
            </Carousel>
          </Grid>
          <Grid
            css={barChartWrapperStyle}
            container
            justifyContent="center"
            alignItems="center"
          >
            BAR CHART COMPONENT <br /> BAR CHART COMPONENT <br /> BAR CHART
            COMPONENT <br />
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

const ResultsContainerWithData = withServerData(ResultsContainer, {
  path: {
    BASE_URL: "https://api.openweathermap.org/data/2.5/forecast?q=",
    APP_ID: "75f972b80e26f14fe6c920aa6a85ad57",
    UNIT_OPTION: "metric",
  },
});

export default ResultsContainerWithData;
