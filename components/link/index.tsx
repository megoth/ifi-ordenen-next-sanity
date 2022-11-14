import React, { MouseEventHandler, ReactNode } from "react";
import NextLink from "next/link";
import { LinkQuery } from "../../lib/api/link";
import { LinkProps } from "next/dist/client/link";

interface Props extends LinkQuery, Omit<LinkProps, "href"> {
  children?: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: Object;
}

export default function Link({
  children,
  className,
  href,
  onClick,
  slug,
  text,
  url,
  style,
  ...props
}: Props) {
  return (
    <NextLink href={href || (slug && `/${slug}`) || url} {...props}>
      <a
        className={className}
        style={style}
        onClick={onClick}
      >
        {text || children}
      </a>
    </NextLink>
  );
}
