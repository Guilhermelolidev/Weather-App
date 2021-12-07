import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Loading = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box height="100vh" alignItems="center" sx={{ display: "flex" }}>
        <CircularProgress size={70} />
      </Box>
    </Grid>
  );
};

export default Loading;
