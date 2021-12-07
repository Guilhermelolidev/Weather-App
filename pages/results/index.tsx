import withServerData from "../../components/withServerData";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  barChartWrapperStyle,
  controlsWrapperStyle,
  weatherSliderWrapperStyle,
} from "../../styles/styles";
import DailyWeatherBox from "../../components/DailyWeatherBox";
import useResultsAndBuildArray from "./useResultsAndBuildDays";

const ResultsContainer = ({ list, city: cityInfo }) => {
  const { weatherPeriodsGroupedByDay } = useResultsAndBuildArray({
    list,
    cityInfo,
  });

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Box
          height="100vh"
          width="100vw"
          alignItems="center"
          sx={{ background: "red" }}
        >
          <Grid
            css={controlsWrapperStyle}
            container
            justifyContent="center"
            alignItems="center"
          >
            CONTROLS CONTROLS CONTROLS
          </Grid>
          <Grid css={weatherSliderWrapperStyle} container>
            {weatherPeriodsGroupedByDay.slice(0, 2).map((singleDay, index) => (
              <DailyWeatherBox key={index} singleDay={singleDay} />
            ))}
          </Grid>
          <Grid
            css={barChartWrapperStyle}
            container
            justifyContent="center"
            alignItems="center"
          >
            BAR CHART BAR CHART BAR CHART
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
    EXTRA_OPTIONS: "units=metric",
  },
});

export default ResultsContainerWithData;
