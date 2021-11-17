import React from "react";
import { NavigationItem } from "../lib/api/site-settings";
import Link from "next/link";

interface Props {
  navItems: Array<NavigationItem>;
}

export default function Navigation({ navItems }: Props) {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li>
            <Link as={`/${item.slug}`} href="/[slug]">
              <a className="hover:underline">{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
