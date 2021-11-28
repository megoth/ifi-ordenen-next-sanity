import React, { ReactNode } from "react";
import NextLink from "next/link";
import { LinkQuery } from "../../lib/api/link";
import { LinkProps } from "next/dist/client/link";

interface Props extends LinkQuery, LinkProps {
  children?: ReactNode;
  className?: string;
}

export default function Link({
  children,
  className,
  href,
  slug,
  text,
  url,
  ...props
}: Props) {
  return (
    <NextLink href={href || slug || url} {...props}>
      <a className={className}>{text || children}</a>
    </NextLink>
  );
}
