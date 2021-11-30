import React from "react";
import { AppProps } from "next/app";
import "../components/reset.css";
import "../components/fonts.css";
import "../components/styles.css";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
