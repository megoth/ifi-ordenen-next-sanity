import React, { ReactNode } from "react";
import NextLink from "next/link";
import { LinkQuery } from "../lib/api/link";

interface Props extends LinkQuery {
  children?: ReactNode;
  href?: string;
}

export default function Link({ children, href, slug, text, url }: Props) {
  return (
    <NextLink href={href || slug || url}>
      <a className="hover:underline">{text || children}</a>
    </NextLink>
  );
}
