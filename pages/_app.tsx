import React from "react";
import { AppProps } from "next/app";
import "../components/reset.css";
import "../components/fonts.css";
import "../components/styles.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { EventsProvider } from "../contexts/eventsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimpleReactLightbox>
      <EventsProvider>
        <Component {...pageProps} />
      </EventsProvider>
    </SimpleReactLightbox>
  );
}

export default MyApp;
