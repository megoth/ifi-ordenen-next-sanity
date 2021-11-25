import React from "react";
import { ComponentProps } from "./page-components";
import Link from "./link";

interface Props extends Sanity.Schema.ButtonComponent, ComponentProps {}

export default function ButtonComponent({ text, link }: Props) {
  return (
    <Link slug={link.internalLink?._ref} url={link.externalUrl}>
      {text}
    </Link>
  );
}
