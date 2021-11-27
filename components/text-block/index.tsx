import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { textBlockStyle } from "./styles.css";
import cn from "classnames";

interface Props {
  text: Array<Sanity.Keyed<Sanity.Block>>;
  className?: string;
}

export default function TextBlock({ text, className }: Props) {
  return (
    <div className={cn(textBlockStyle, className)}>
      <BlockContent
        blocks={text}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      />
    </div>
  );
}
