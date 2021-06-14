import '../styles/reset.css';
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../src/components/Global/globalStyles";
import { lightTheme, darkTheme } from "../src/components/Global/ThemeConfig"
import Head from "next/head";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
     </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
