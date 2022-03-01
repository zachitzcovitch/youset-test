import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import ThemeProvider from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
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
