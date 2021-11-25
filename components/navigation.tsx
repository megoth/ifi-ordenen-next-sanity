import React from "react";
import Link from "./link";
import { LinkQuery } from "../lib/api/link";

interface Props {
  navItems?: Array<LinkQuery>;
  type: string;
}

export default function Navigation({ navItems, type }: Props) {
  return (
    <nav>
      <ul>
        {navItems?.map((item, index) => (
          <li key={`navigation-${type}-${index}`}>
            <Link {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
