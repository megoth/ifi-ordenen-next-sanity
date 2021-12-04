import React, { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import {
  tabLinkSelectedStyle,
  tabLinkStyle,
  tabSelectedStyle,
  tabStyle,
} from "./styles.css";
import Button from "../../button";

interface Props {
  children: ReactNode;
  href?: string;
  key: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  selected: boolean;
}

export default function Tab({ children, href, key, onClick, selected }: Props) {
  return (
    <li
      className={cn(tabStyle, {
        [tabSelectedStyle]: selected,
      })}
      key={key}
    >
      <Button
        className={cn(tabLinkStyle, {
          [tabLinkSelectedStyle]: selected,
        })}
        href={href}
        onClick={onClick}
      >
        {children}
      </Button>
    </li>
  );
}
