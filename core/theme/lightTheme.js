import { colors, createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#6B5CA5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    logoText: {
      fontVariant: "small-caps",
      fontSize: "17px",
      "&:first-letter": {
        fontSize: "20px",
        color: colors.indigo[100],
      },
    },
  },
});
