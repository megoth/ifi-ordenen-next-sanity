import React from "react";
import Container from "./container";
import { SiteSettingsQuery } from "../lib/api/site-settings";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  siteSettings?: SiteSettingsQuery;
}

export default function Footer({ siteSettings }: Props) {
  return (
    <footer>
      <Container>
        <p>{siteSettings?.title}</p>
        <BlockContent
          blocks={siteSettings?.footer}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
      </Container>
    </footer>
  );
}
