import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

export default function Meta({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
      {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />*/}
      {/*<link*/}
      {/*  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"*/}
      {/*  rel="stylesheet"*/}
      {/*/>*/}
      <link
        href="/fonts/Inter/Inter-VariableFont_slnt,wght.ttf"
        rel="stylesheet"
      />
      {/*<link*/}
      {/*  rel="apple-touch-icon"*/}
      {/*  sizes="180x180"*/}
      {/*  href="/favicon/apple-touch-icon.png"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="32x32"*/}
      {/*  href="/favicon/favicon-32x32.png"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="16x16"*/}
      {/*  href="/favicon/favicon-16x16.png"*/}
      {/*/>*/}
      {/*<link rel="manifest" href="/favicon/site.webmanifest" />*/}
      {/*<link*/}
      {/*  rel="mask-icon"*/}
      {/*  href="/favicon/safari-pinned-tab.svg"*/}
      {/*  color="#000000"*/}
      {/*/>*/}
      {/*<link rel="shortcut icon" href="/favicon/favicon.ico" />*/}
      {/*<meta name="msapplication-TileColor" content="#212020" />*/}
      {/*<meta name="msapplication-config" content="/favicon/browserconfig.xml" />*/}
      {/*<meta name="theme-color" content="#212020" />*/}
      {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
      {/*<meta*/}
      {/*  name="description"*/}
      {/*  content={`A statically generated blog example using Next.js and Sanity.io.`}*/}
      {/*/>*/}
      {/*<meta property="og:image" content={HOME_OG_IMAGE_URL} />*/}
    </Head>
  );
}
