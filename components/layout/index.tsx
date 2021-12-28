import React, { useEffect } from "react";
import Footer from "../footer";
import Meta from "../meta";
import { ReactNode } from "react";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import Header from "../header";
import { layoutStyle } from "./styles.css";
import Container from "../container";
import { NavigationProvider } from "../../contexts/navigationContext";
import NavigationModal from "../navigation-modal";
import usePopState from "../../hooks/usePopState";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  pageTitle?: string;
  siteSettings?: SiteSettingsQuery;
}

export default function Layout({ children, pageTitle, siteSettings }: Props) {
  const popStateEvent = usePopState();
  const router = useRouter();
  const title = pageTitle
    ? `${pageTitle} - ${siteSettings?.title}`
    : siteSettings?.title;

  useEffect(() => {
    if (
      popStateEvent?.state.pathname &&
      popStateEvent?.state.pathname !== router?.pathname
    ) {
      router.push(
        `${popStateEvent?.state.pathname}?by=${popStateEvent?.state.view}`
      );
    }
  }, [popStateEvent]);
  return (
    <NavigationProvider>
      <div className={layoutStyle}>
        <Meta title={title} siteSettings={siteSettings} />
        <div>
          <Header />
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
