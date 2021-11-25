import React from "react";
import ButtonComponent from "./button-component";
import { ComponentProps } from "./page-components";

interface Props extends Sanity.Schema.ButtonsComponent, ComponentProps {}

export default function ButtonsComponent({ buttons, componentIndex }: Props) {
  return (
    <ul>
      {buttons.map((button, index) => (
        <li key={`buttons-${componentIndex}-${index}`}>
          <ButtonComponent {...button} componentIndex={componentIndex} />
        </li>
      ))}
    </ul>
  );
}
