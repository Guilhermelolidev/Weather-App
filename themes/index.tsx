import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#b71c1c",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
    ].join(","),
  },
});

export default theme;
