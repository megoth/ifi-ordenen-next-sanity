import React from "react";
import { ComponentProps } from "../page-components";
import ArrowButton from "../arrow-button";
import { buttonComponentStyle } from "./styles.css";
import { ButtonComponent as ButtonComponentSchema } from "../../studio/sanity.types";

interface Props extends ButtonComponentSchema, ComponentProps {
  className?: string;
}

export default function ButtonComponent(props: Props) {
  return (
    <div className={buttonComponentStyle}>
      <ArrowButton {...props} />
    </div>
  );
}
