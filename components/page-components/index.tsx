import React from "react";
import { PageQuery } from "../../lib/api/pages";
import TextComponent from "../text-component";
import ButtonComponent from "../button-component";
import ButtonsComponent from "../buttons-component";
import DataComponent from "../data-component";
import { DataModules } from "../../lib/api/dataModules";
import Container from "../container";

interface Props extends DataModules {
  page?: Partial<PageQuery>;
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
              <Container key={key}>
                <ButtonComponent {...component} componentIndex={index} />
              </Container>
            );
          case "buttons-component":
            return (
              <Container key={key}>
                <ButtonsComponent {...component} componentIndex={index} />
              </Container>
            );
          case "data-component":
            const props = { ...component, ...data };
            return (
              <DataComponent {...props} key={key} componentIndex={index} />
            );
          case "text-component":
            return (
              <Container key={key}>
                <TextComponent {...component} componentIndex={index} />
              </Container>
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
