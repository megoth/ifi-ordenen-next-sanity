import React from "react";
import ButtonComponent from "../button-component";
import { ComponentProps } from "../page-components";
import { buttonsStyle } from "./styles.css";

interface Props extends Sanity.Schema.ButtonsComponent, ComponentProps {}

export default function ButtonsComponent({ buttons, componentIndex }: Props) {
  return (
    <div className={buttonsStyle}>
      {buttons.map((button, index) => (
        <ButtonComponent
          {...button}
          componentIndex={componentIndex}
          key={`buttons-${componentIndex}-${index}`}
        />
      ))}
    </div>
  );
}
