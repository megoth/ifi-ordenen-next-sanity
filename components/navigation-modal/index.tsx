import React, { useContext } from "react";
import { SiteSettingsQuery } from "../../lib/api/site-settings";
import Navigation from "../navigation";
import NavigationContext from "../../contexts/navigationContext";
import cn from "classnames";
import { modalInnerStyle, modalStyle } from "./styles.css";

interface Props {
  siteSettings: SiteSettingsQuery;
}

export default function NavigationModal({ siteSettings }: Props) {
  const { isOpen } = useContext(NavigationContext);
  return (
    <div
      className={cn(modalStyle, {
        open: isOpen,
      })}
    >
      <div className={modalInnerStyle}>
        <Navigation
          navItems={siteSettings?.mainNavItems}
          type={"main-menu"}
          ariaLabel="Hovedmeny"
        />
        <Navigation
          navItems={siteSettings?.subNavItems}
          type={"sub-menu"}
          ariaLabel="Undermeny"
        />
      </div>
    </div>
  );
}
