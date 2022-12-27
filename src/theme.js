import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {},
  props: {
    MuiButton: {
      variant: "contained",
      disableRipple: true,
      color: "primary",
    },
    MuiTextField: {
      variant: "contained",
      InputLabelProps: {
        shrink: true,
      },
    },
    Paper: {
      elevation: 0,
    },
  },
  breakpoints: {
    values: {
      small: 0,
      mobile: 300,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
export default theme;
