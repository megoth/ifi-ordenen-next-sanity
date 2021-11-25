import React from "react";
import { NavigationItem } from "../lib/api/site-settings";
import Link from "next/link";

interface Props {
  navItems: Array<NavigationItem>;
  type: string;
}

export default function Navigation({ navItems, type }: Props) {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={`navigation-${type}-${index}`}>
            <Link as={`/${item.slug}`} href="/[slug]">
              <a className="hover:underline">{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
