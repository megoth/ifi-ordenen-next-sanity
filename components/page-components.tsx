import React from "react";
import { PageQuery } from "../lib/api/pages";
import TextComponent from "./text-component";
import ButtonComponent from "./button-component";
import ButtonsComponent from "./buttons-component";
import DataComponent from "./data-component";
import { DataModules } from "../lib/api/dataModules";

interface Props extends DataModules {
  page?: PageQuery;
}

export interface ComponentProps {
  componentIndex: number;
}

export default function PageComponents({ page, ...data }: Props) {
  if (!page) {
    return <div>Unable to load page (is the page available in Sanity?)</div>;
  }
  return (
    <>
      {page.components?.map((component, index) => {
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
          case "data-component":
            const props = { ...component, ...data };
            return (
              <DataComponent {...props} key={key} componentIndex={index} />
            );
          case "text-component":
            return (
              <TextComponent {...component} key={key} componentIndex={index} />
            );
          default:
            return (
              <div key={key}>
                <div>Unknown component</div>
                <pre>{JSON.stringify(component)}</pre>
              </div>
            );
        }
      })}
    </>
  );
}
