import React from "react";
import { ComponentProps } from "./page-components";
import Associations from "./assocations";
import Events from "./events";
import LastMembers from "./last-members";
import Members from "./members";
import { DataModules } from "../lib/api/dataModules";
import DictionaryEntries from "./dictionaryEntries";

const dataComponents: { [KEY in keyof DataModules]: Function } = {
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
  ...data
}: Props) {
  const component = dataComponents[type];
  if (!component) {
    return <div>Incorrect component type: {type}</div>;
  }
  if (component && !data[type]) {
    return (
      <div>
        Missing data for module ({type}): Are you sure you wired up the page
        properly?
      </div>
    );
  }
  return component(data);
}
