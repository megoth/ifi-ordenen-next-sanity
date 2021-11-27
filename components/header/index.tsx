import React from "react";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import Link from "../link";
import Navigation from "../navigation";

interface Props {
  siteSettings?: SiteSettingsQuery;
}

export default function Header({ siteSettings }: Props) {
  return (
    <header>
      <div>
        <Link href={"/"}>Forside</Link>
      </div>
      <Navigation navItems={siteSettings?.mainNavItems} type={"main-menu"} />
      <Navigation navItems={siteSettings?.subNavItems} type={"sub-menu"} />
    </header>
  );
}
