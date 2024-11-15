import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  typography: {
    fontSize: 16, // default font size
    h5: {
      fontSize: 16, // override h1 font size
    },
    h7 :
    {
        fontSize: 26,
    },
    h6: {
      fontSize: 18, // override h2 font size
    },
    h4: {
      fontSize: 30, // override h2 font size
    },
    body1: {
      fontSize: 18, // override body1 font size
    },
  }
});