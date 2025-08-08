import React, { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { tabLinkSelectedStyle, tabLinkStyle, tabStyle } from "./styles.css";
import Button from "../../button";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selected: boolean;
}

export default function Tab({ children, href, onClick, selected }: Props) {
  return (
    <Button
      className={cn(tabStyle, tabLinkStyle, {
        [tabLinkSelectedStyle]: selected,
      })}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
