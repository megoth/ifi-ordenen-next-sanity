import React, { ReactNode } from "react";
import NextLink from "next/link";
import { LinkQuery } from "../../lib/api/link";

interface Props extends LinkQuery {
  children?: ReactNode;
  className?: string;
  href?: string;
}

export default function Link({
  children,
  className,
  href,
  slug,
  text,
  url,
}: Props) {
  return (
    <NextLink href={href || slug || url}>
      <a className={className}>{text || children}</a>
    </NextLink>
  );
}
