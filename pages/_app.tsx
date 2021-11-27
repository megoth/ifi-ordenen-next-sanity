import React from "react";
import { AppProps } from "next/app";
import "../components/reset.css";
import "../components/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
