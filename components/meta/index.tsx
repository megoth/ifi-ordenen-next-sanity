import React from "react";
import Head from "next/head";
import { SiteSettingsQuery } from "../../lib/api/site-settings";

interface Props {
  title: string;
  siteSettings: SiteSettingsQuery | undefined;
}

export default function Meta({ title, siteSettings }: Props) {
  console.log(siteSettings);
  return (
    <Head>
      <title>{title}</title>
      <link
        href="/fonts/Inter/Inter-VariableFont_slnt,wght.ttf"
        rel="stylesheet"
      />
      <link
        href="/rss"
        rel="alternate"
        type="application/rss+xml"
        title={`RSS for ${siteSettings?.title}`}
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
      {/*<meta name="msapplication-TileColor" content={vars.color.base} />*/}
      {/*<meta name="msapplication-config" content="/favicon/browserconfig.xml" />*/}
      {/*<meta name="theme-color" content={vars.color.base} />*/}
      {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
      <meta name="description" content={siteSettings?.description} />
      {/*<meta property="og:image" content={HOME_OG_IMAGE_URL} />*/}
    </Head>
  );
}
