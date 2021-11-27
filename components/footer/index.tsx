import React from "react";
import Container from "../container";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import { footerStyle } from "./styles.css";
import TextBlock from "../text-block";

interface Props {
  siteSettings?: SiteSettingsQuery;
}

export default function Footer({ siteSettings }: Props) {
  return (
    <footer className={footerStyle}>
      <Container variant="contained">
        <p>{siteSettings?.title}</p>
        <TextBlock text={siteSettings?.footer} />
      </Container>
    </footer>
  );
}
