import React from "react";
import { ComponentProps } from "../page-components";
import Button from "../button";

interface Props extends Sanity.Schema.ButtonComponent, ComponentProps {
  className?: string;
}

export default function ButtonComponent({ text, link, variant }: Props) {
  return (
    <Button
      href={link?.internalLink?._ref || link?.externalUrl}
      variant={variant}
    >
      {text}
    </Button>
  );
}
