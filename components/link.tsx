import React from "react";
import NextLink from "next/link";
import { LinkQuery } from "../lib/api/link";

interface Props extends LinkQuery {}

export default function Link({ slug, text, url }: Props) {
  return (
    <NextLink href={slug || url}>
      <a className="hover:underline">{text}</a>
    </NextLink>
  );
}
