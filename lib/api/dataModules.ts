import { AssociationQuery } from "./associations";
import { EventForListQuery } from "./history";
import { PersonForListQuery } from "./people";
import { DictionaryEntryQuery } from "./dictionary";
import { AlbumQuery } from "./gallery";

// IMPORTANT!!!
// Make sure that dataModules and DataModules contains the same keys
// Also update /components/data-component.tsx

export const dataModules = [
  "albums",
  "associations",
  "dictionaryEntries",
  "events",
  "lastMembers",
  "members",
];

export interface DataModules {
  albums?: Array<AlbumQuery>;
  associations?: Array<AssociationQuery>;
  dictionaryEntries?: Array<DictionaryEntryQuery>;
  events?: Array<EventForListQuery>;
  lastMembers?: Array<PersonForListQuery>;
  members?: Array<PersonForListQuery>;
}
