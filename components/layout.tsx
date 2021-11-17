import React from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { ReactNode } from "react";
import { SiteSettingsQuery } from "../lib/api/site-settings";
import Navigation from "./navigation";

interface Props {
  children: ReactNode;
  siteSettings: SiteSettingsQuery;
}

export default function Layout({ children, siteSettings }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation navItems={siteSettings.mainNavItems} />
        <Navigation navItems={siteSettings.subNavItems} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
