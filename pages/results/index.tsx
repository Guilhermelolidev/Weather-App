import TextField from "@mui/material/TextField";
import withServerData from "../../components/withServerData";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ResultsContainer = ({ list, city: cityInfo }) => {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Box
          height="100vh"
          width="100vw"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <div>
            RESULTS CONTAINER RESULTS CONTAINER RESULTS CONTAINER RESULTS
            CONTAINER
            <TextField
              fullWidth
              placeholder="Choose a city"
              label="City"
              id="city"
            />
          </div>
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
