import React from "react";
import { PageQuery } from "../lib/api/pages";
import TitleComponent from "./title-component";
import TextComponent from "./text-component";
import ButtonComponent from "./button-component";
import ButtonsComponent from "./buttons-component";

interface Props {
  page: PageQuery;
}

export interface ComponentProps {
  componentIndex: number;
}

export default function PageComponents({ page }: Props) {
  return (
    <>
      {page.components.map((component, index) => {
        const key = `page-component-${index}-${component._type}`;
        switch (component._type) {
          case "button-component":
            return (
              <ButtonComponent
                {...component}
                key={key}
                componentIndex={index}
              />
            );
          case "buttons-component":
            return (
              <ButtonsComponent
                {...component}
                key={key}
                componentIndex={index}
              />
            );
          case "text-component":
            return (
              <TextComponent {...component} key={key} componentIndex={index} />
            );
          case "title-component":
            return (
              <TitleComponent {...component} key={key} componentIndex={index} />
            );
          default:
            return <div key={key}>Unknown component</div>;
        }
      })}
    </>
  );
}
