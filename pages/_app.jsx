import { CssBaseline, ThemeProvider } from "@mui/material";
import NavMenu from "../components/NavMenu";
import { lightTheme } from "../core/theme/lightTheme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <NavMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
