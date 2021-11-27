import React from "react";
import Footer from "../footer";
import Meta from "../meta";
import { ReactNode } from "react";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import Header from "../header";
import { headerStyle, layoutStyle } from "./styles.css";
import Container from "../container";
import { NavigationProvider } from "../../contexts/navigationContext";
import NavigationModal from "../navigation-modal";

interface Props {
  children: ReactNode;
  pageTitle?: string;
  siteSettings?: SiteSettingsQuery;
}

export default function Layout({ children, pageTitle, siteSettings }: Props) {
  const title = pageTitle
    ? `${pageTitle} - ${siteSettings?.title}`
    : siteSettings?.title;
  return (
    <NavigationProvider>
      <div className={layoutStyle}>
        <Meta title={title} />
        <div>
          <Container>
            <Header className={headerStyle} />
          </Container>
          <NavigationModal siteSettings={siteSettings} />
          <main>
            {pageTitle && (
              <Container>
                <h1>{pageTitle}</h1>
              </Container>
            )}
            {children}
          </main>
        </div>
        <Footer siteSettings={siteSettings} />
      </div>
    </NavigationProvider>
  );
}
