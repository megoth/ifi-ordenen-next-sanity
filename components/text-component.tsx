import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { ComponentProps } from "./page-components";

interface Props extends Sanity.Schema.TextComponent, ComponentProps {}

export default function TextComponent({ text }: Props) {
  return (
    <BlockContent
      blocks={text}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    />
  );
}
