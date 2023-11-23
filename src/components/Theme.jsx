import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: "#f57c00",
    },
  },
});

export default theme;
