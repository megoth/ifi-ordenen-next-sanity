import React from "react";
import { ComponentProps } from "../page-components";
import Button from "../button";
import Arrow from "../arrow";

interface Props extends Sanity.Schema.ButtonComponent, ComponentProps {
  className?: string;
}

export default function ArrowButton({ text, link, variant }: Props) {
  const secureVariant = variant || "secondary";
  return (
    <Button
      href={link?.internalLink?._ref || link?.externalUrl}
      variant={secureVariant}
    >
      <span>{text}</span>
      <Arrow variant={secureVariant} />
    </Button>
  );
}
