import React from "react";
import { ComponentProps } from "./page-components";

interface Props extends Sanity.Schema.ButtonComponent, ComponentProps {}

export default function ButtonComponent({ text }: Props) {
  return <a href={"#"}>{text}</a>;
}
