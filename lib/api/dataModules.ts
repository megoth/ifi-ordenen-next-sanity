import { AssociationQuery } from "./associations";
import { EventForListQuery } from "./history";
import { PersonForListQuery } from "./people";
import { DictionaryEntryQuery } from "./dictionary";
import { AlbumQuery } from "./gallery";
import { PageUpdateQuery } from "./page-updates";
import { GeneralAssemblyForListQuery } from "./generalAssembly";

// IMPORTANT!!!
// Also update src/components/data-component.tsx
// Also update studio/lib/data-component.tsx

export interface DataModules {
  albums?: Array<AlbumQuery>;
  associations?: Array<AssociationQuery>;
  assemblies?: Array<GeneralAssemblyForListQuery>;
  dictionaryEntries?: Array<DictionaryEntryQuery>;
  events?: Array<EventForListQuery>;
  lastMembers?: Array<PersonForListQuery>;
  members?: Array<PersonForListQuery>;
  pageUpdates?: Array<PageUpdateQuery>;
}
