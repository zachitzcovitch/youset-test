import Head from "next/head";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

import ThemeProvider from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Youset Plans</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
