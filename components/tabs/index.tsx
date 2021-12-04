import React, { ReactNode } from "react";
import { tabsStyle } from "./styles.css";

interface Props {
  children: Array<ReactNode>;
}

export default function Tabs({ children }: Props) {
  return <ul className={tabsStyle}>{children}</ul>;
}
