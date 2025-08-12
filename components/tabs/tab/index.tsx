import React, { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { tabLinkSelectedStyle, tabLinkStyle, tabStyle } from "./styles.css";
import Button from "../../button";
import { LinkUrl } from "../../link";

interface Props {
  children: ReactNode;
  href?: LinkUrl;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selected: boolean;
}

export default function Tab({ children, href, onClick, selected }: Props) {
  return (
    <Button
      className={cn(tabStyle, tabLinkStyle, {
        [tabLinkSelectedStyle]: selected
      })}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
