import React from "react";
import Container from "../container";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import {
  footerContainerStyle,
  footerStyle,
  footerTextStyle,
} from "./styles.css";
import TextBlock from "../text-block";
import Logo from "../logo";

interface Props {
  siteSettings?: SiteSettingsQuery;
}

export default function Footer({ siteSettings }: Props) {
  return (
    <footer className={footerStyle}>
      <Container className={footerContainerStyle} variant="brown">
        <Logo />
        <div className={footerTextStyle}>
          <p>{siteSettings?.title}</p>
          <TextBlock text={siteSettings?.footer} />
        </div>
      </Container>
    </footer>
  );
}
