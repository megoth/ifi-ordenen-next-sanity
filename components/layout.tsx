import React from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { ReactNode } from "react";
import { SiteSettingsQuery } from "../lib/api/site-settings";
import Navigation from "./navigation";
import Link from "./link";

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
    <>
      <Meta title={title} />
      <div>
        <div>
          <Link href={"/"}>Forside</Link>
        </div>
        <Navigation navItems={siteSettings?.mainNavItems} type={"main-menu"} />
        <Navigation navItems={siteSettings?.subNavItems} type={"sub-menu"} />
        <main>
          <h2>
            <a>{pageTitle}</a>
          </h2>
          {children}
        </main>
      </div>
      <Footer siteSettings={siteSettings} />
    </>
  );
}
