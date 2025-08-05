import React from "react";
import { textBlockStyle } from "./styles.css";
import cn from "classnames";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";

interface Props {
  text: TypedObject[];
  className?: string;
}

export default function TextBlock({ text, className }: Props) {
  return (
    <div className={cn(textBlockStyle, className)}>
      <PortableText value={text} />
    </div>
  );
}
