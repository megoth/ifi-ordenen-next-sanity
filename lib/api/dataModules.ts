import { AssociationQuery } from "./associations";
import { EventForListQuery } from "./history";
import { PersonForListQuery } from "./people";

// IMPORTANT!!!
// Make sure that dataModules and DataModules contains the same keys
// Also update /components/data-component.tsx

export const dataModules = ["associations", "events", "lastMembers", "members"];

export interface DataModules {
  associations?: Array<AssociationQuery>;
  events?: Array<EventForListQuery>;
  lastMembers?: Array<PersonForListQuery>;
  members?: Array<PersonForListQuery>;
}
