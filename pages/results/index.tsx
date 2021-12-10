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

import useListToBuildDays from "./useListToBuildDays";
import RowRadioGroupUnits from "../../components/Input/RowRadioGroupUnits";
import Carousel from "react-material-ui-carousel";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import useMediaQuery from "@mui/material/useMediaQuery";
import useCarouselResults from "./useCarouselResults";
import type { resultsFromFetch } from "./types";

const ResultsContainer = ({ list }: resultsFromFetch) => {
  const isMediumDevices = useMediaQuery("(max-width:900px)");
  const isSmallDevices = useMediaQuery("(max-width:600px)");

  const { weatherPeriodsGroupedByDay } = useListToBuildDays({
    list,
  });

  const { items } = useCarouselResults({
    isMediumDevices,
    isSmallDevices,
    weatherPeriodsGroupedByDay,
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
              {items}
            </Carousel>
          </Grid>
          <Grid
            css={barChartWrapperStyle}
            container
            justifyContent="center"
            alignItems="center"
          >
            <BarChartTwoToneIcon color="primary" sx={{ fontSize: 400 }} />
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
