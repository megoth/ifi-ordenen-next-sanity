import React from "react";
import { ComponentProps } from "../page-components";
import ArrowButton from "../arrow-button";
import { buttonComponentStyle } from "./styles.css";

interface Props extends Sanity.Schema.ButtonComponent, ComponentProps {
  className?: string;
}

export default function ButtonComponent(props: Props) {
  return (
    <div className={buttonComponentStyle}>
      <ArrowButton {...props} />
    </div>
  );
}
