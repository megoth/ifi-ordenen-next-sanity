import React from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { ReactNode } from "react";
import { SiteSettingsQuery } from "../lib/api/site-settings";
import Navigation from "./navigation";

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
      <div className="min-h-screen">
        <Navigation navItems={siteSettings?.mainNavItems} type={"main-menu"} />
        <Navigation navItems={siteSettings?.subNavItems} type={"sub-menu"} />
        <main>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            <a className="hover:underline">{pageTitle}</a>
          </h2>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
