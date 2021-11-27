import React from "react";
import { ComponentProps } from "../page-components";
import { textComponentStyle } from "./styles.css";
import cn from "classnames";
import TextBlock from "../text-block";

interface Props extends Sanity.Schema.TextComponent, ComponentProps {}

export default function TextComponent({ text, variant }: Props) {
  return <TextBlock text={text} className={cn(textComponentStyle, variant)} />;
}
