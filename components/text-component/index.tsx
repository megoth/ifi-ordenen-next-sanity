import React from "react";
import { ComponentProps } from "../page-components";
import { textComponentStyle } from "./styles.css";
import cn from "classnames";
import TextBlock from "../text-block";
import { TextComponent as TextComponentSchema } from "../../studio/sanity.types";

interface Props extends TextComponentSchema, ComponentProps {}

export default function TextComponent({ text, variant }: Props) {
  return <TextBlock text={text} className={cn(textComponentStyle, variant)} />;
}
