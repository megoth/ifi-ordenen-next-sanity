import React from "react";
import { ComponentProps } from "./page-components";

interface Props extends Sanity.Schema.TitleComponent, ComponentProps {}

export default function TitleComponent({ text }: Props) {
  return <h2>{text}</h2>;
}
