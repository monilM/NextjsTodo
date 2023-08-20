// pages/_app.js

import "../styles/globals.css";
import getTheme from "../../shared-style-guide/styles/themes/base";
import { ThemeProvider } from "styled-components";

const theme = getTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
