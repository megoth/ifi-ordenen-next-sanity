import React from "react";
import { ComponentProps } from "../page-components";
import Associations from "../associations";
import Events from "../events";
import LastMembers from "../last-members";
import Members from "../members";
import { DataModules } from "../../lib/api/dataModules";
import DictionaryEntries from "../dictionaryEntries";
import Albums from "../albums";

const dataComponents: { [KEY in keyof DataModules]: Function } = {
  albums: Albums,
  associations: Associations,
  dictionaryEntries: DictionaryEntries,
  events: Events,
  lastMembers: LastMembers,
  members: Members,
};

interface Props extends Sanity.Schema.DataComponent, ComponentProps {}

export default function DataComponent({
  type,
  componentIndex,
  ...component
}: Props) {
  const Component = dataComponents[type];
  if (!Component) {
    return <div>Incorrect component type: {type}</div>;
  }
  const data = component[type];
  if (Component && !data) {
    return (
      <div>
        Missing data for module ({type}): Are you sure you wired up the page
        properly?
      </div>
    );
  }
  return <Component {...component} />;
}
