import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { themeClass } from "../components/styles.css";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="no" className={themeClass}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
