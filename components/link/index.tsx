import React, { HTMLProps, MouseEventHandler, ReactNode } from "react";
import NextLink from "next/link";
import { LinkQuery } from "../../lib/api/link";
import { LinkProps } from "next/dist/client/link";
import { UrlObject } from "url";

export type LinkUrl = string | UrlObject;

interface Props extends Omit<LinkProps, "href">, Omit<HTMLProps<HTMLAnchorElement>, "as" | "href"> {
  children?: ReactNode;
  className?: string;
  href?: LinkUrl;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  slug?: string;
  text?: string;
  url?: string;
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
    <NextLink href={href || (slug && `/${slug}`) || url}
              className={className}
              style={style}
              onClick={onClick}
              {...props}>
      {text || children}
    </NextLink>
  );
}
